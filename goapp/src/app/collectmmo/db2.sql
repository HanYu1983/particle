drop table if exists mapUserPlayer;
drop table if exists item;
drop table if exists player;
drop table if exists cell;
drop table if exists cellType;

drop table if exists log;
create table log(
	id int auto_increment,
	msg text,
	primary key(id),
	ctime timestamp default current_timestamp
) engine=InnoDB default charset=latin1 comment='';

drop table if exists user;
create table user(
	name varchar(255),
	nickname varchar(255),
	ctime timestamp default current_timestamp,
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table cellType(
	name char(10),
	canmove tinyint(1) comment '是否能移動',
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table cell(
	x int default 0,
	y int default 0,
	cellType char(10),
	primary key(x,y),
	foreign key(cellType) references cellType(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table player(
	name varchar(255),
	x int default 0,
	y int default 0,
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table item(
	name varchar(255),
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table mapUserPlayer(
	user varchar(255),
	player varchar(255),
	primary key(user, player),
	foreign key(user) references user(name) on delete cascade,
	foreign key(player) references player(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

drop view if exists cellview;
create view cellview as
select * from cell as c left join cellType as ct on c.cellType = ct.name;

drop view if exists entityview;
create view entityview as
select p.name as name, 'player' as entityType from player as p
union
select i.name as name, 'item' as entityType from item as i
union
select u.name as name, 'user' as entityType from user as u;

# 要使用交易所以把自動commit關掉
# 使用以下指令來查詢自動commit狀態:SELECT @@AUTOCOMMIT
# 使用以下指令來查詢隔離層級:SELECT @@tx_isolation
set AUTOCOMMIT=0;

DELIMITER $$

# 取得并建立玩家
# 玩家一登入後就呼叫這個取得資訊
# createplayer代表是否自動建立一個遊戲角色
drop procedure if exists getUser $$
create procedure getUser(username varchar(255), createplayer bool) begin
	declare hasUser int;
	# 定義回滾
	declare exit handler for sqlexception begin
		rollback;
	end;
	declare exit handler for sqlwarning begin
		rollback;
	end;
	start transaction;
	select count(name) into hasUser from user where name = username;
	if hasUser = 0 then
		insert into user(name) values (username);
		if createplayer = true then
			# 使用upsert
			# 這樣我就可不用管有沒有重覆鍵值例外
			insert into player(name) values (username) on duplicate key update
				name = username;
			insert into mapUserPlayer(user, player) values (username, username) on duplicate key update
				user = username, player = username;
		end if;
	end if;
	select * from user where name = username;
	commit;
end $$

# 取得地圖
# 指定一個地點為中心和左上的差距
# 每次移動後就呼叫這個取得新的地圖
drop procedure if exists getMap $$
create procedure getMap(x int, y int, l int, t int) begin
	declare sx, sy, ex, ey int;
	set sx = x - l;
	set ex = x + l;
	set sy = y - t;
	set ey = y + t;
	# 注意。不要把變數名稱和欄位名稱搞混
	select c.x, c.y, c.cellType, c.canmove from cellview as c where c.x >= sx and c.x < ex and c.y >= sy and c.y < ey;
end $$

# 角色移動
drop procedure if exists move $$
create procedure move(playername varchar(255), ox int, oy int) begin
	# 變數宣告都要在handler or cursor宣告之前
	declare cx, cy int;
	declare isCanMove tinyint;
	declare hasCell tinyint;
	# 定義回滾
	declare exit handler for sqlexception begin
		rollback;
	end;
	declare exit handler for sqlwarning begin
		rollback;
	end;
	# 開始交易
	start transaction;
	# 取得現在位置
	select x, y into cx, cy from player as p where p.name = playername;
	# 計算下一個位置
	set cx = cx+ox;
	set cy = cy+oy;
	# 先判斷有沒有cell
	select count(*) into hasCell from cell where (x,y) = (cx, cy);
	if hasCell = 1 then
		# 判斷指定的cell能不能移動
		select canmove into isCanMove from cellType where name in (select cellType from cell where (x,y) = (cx,cy));
	else
		set isCanMove = 1;
	end if;
	insert into log(msg) values (concat('(x,y,move)',cx,',',cy,',',isCanMove));
	if isCanMove then
		update player set x = cx, y = cy where name = playername;
		select 1;
	else
		select 0;
	end if;
	commit;
end $$

drop procedure if exists test $$
create procedure test() begin
	start transaction;
	insert into player(name) values ('han');
	insert into cellType(name,canmove) values ('plain',1);
	insert into cellType(name,canmove) values ('mountain',0);
	insert into cell(x,y,cellType) values (100,20,'plain');
	insert into cell(x,y,cellType) values (100,21,'mountain');
	call move('han',100,20);
	call move('han',0,1);
	call move('han',1,0);
	commit;
end $$

drop function if exists hello_world $$
CREATE FUNCTION hello_world(addressee TEXT)
  RETURNS TEXT
BEGIN
  DECLARE strlen INT;
  SET strlen = LENGTH(addressee);
  RETURN CONCAT('Hello ', addressee, ' - your parameter has ', strlen, ' characters');
END; $$
DELIMITER ;

# call test();