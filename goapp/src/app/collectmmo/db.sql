drop table if exists item;
drop table if exists player;
drop table if exists cell;
drop table if exists cellType;
drop table if exists entity;
drop table if exists entityType;

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

create table entityType(
	name char(10),
	primary key(name)
) engine=InnoDB default charset=latin1 comment='';

create table entity(
	name varchar(255),
	entityType char(10),
	ctime timestamp default current_timestamp,
	primary key(name, entityType),
	foreign key(entityType) references entityType(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table player(
	name varchar(255),
	x int default 0,
	y int default 0,
	primary key(name),
	foreign key(name) references entity(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table item(
	name varchar(255),
	primary key(name),
	foreign key(name) references entity(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

create table mapUserPlayer(
	user varchar(255),
	player varchar(255),
	primary key(user, player),
	foreign key(user) references user(name) on delete cascade,
	foreign key(player) references entity(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';

drop view if exists playerview;
create view playerview as
select e.entityType, p.* from entity as e left join player as p on e.name = p.name where e.entityType = 'player';

drop view if exists itemview;
create view itemview as
select e.entityType, i.* from entity as e left join item as i on e.name = i.name where e.entityType = 'item';

drop view if exists cellview;
create view cellview as
select * from cell as c left join cellType as ct on c.cellType = ct.name;


drop table if exists log;
create table log(
	id int auto_increment,
	msg text,
	primary key(id),
	ctime timestamp default current_timestamp
) engine=InnoDB default charset=latin1 comment='';

# 要使用交易所以把自動commit關掉
# 使用以下指令來查詢自動commit狀態:SELECT @@AUTOCOMMIT
# 使用以下指令來查詢隔離層級:SELECT @@tx_isolation
set AUTOCOMMIT=0;

DELIMITER $$
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
	select x, y into cx, cy from playerview as p where p.name = playername;
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
	insert into entityType(name) values ('player');
	insert into entity (name,entityType) values ('han', 'player');
	insert into player(name) values ('han');
	insert into cellType(name,canmove) values ('plain',1);
	insert into cellType(name,canmove) values ('mountain',0);
	insert into cell(x,y,cellType) values (100,20,'plain');
	insert into cell(x,y,cellType) values (100,21,'mountain');
	call move('han',100,20);
	call move('han',0,1);
	call move('han',1,0);
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