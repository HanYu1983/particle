drop table if exists item;
drop table if exists player;
drop table if exists cell;
drop table if exists cellType;
drop table if exists entity;
drop table if exists entityType;

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
	name char(20),
	x int default 0,
	y int default 0,
	primary key(name),
	foreign key(name) references entity(name) on delete cascade
) engine=InnoDB default charset=latin1 comment='';


create table item(
	name char(20),
	primary key(name),
	foreign key(name) references entity(name) on delete cascade
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

DELIMITER $$
drop procedure if exists move $$
create procedure move(playername varchar(255), ox int, oy int) begin
	declare cx, cy int;
	declare isCanMove tinyint;
	declare hasCell tinyint;
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