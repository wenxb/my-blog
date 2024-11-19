---
title: SQL Server学习笔记
tags:
  - SQLServer
category:
  - 日志记录
date: 2023-02-28T11:03:43.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220857479.png'
id: VYLOORt9l9BcQqghou0oTF
---

### 数据类型

![](https://pic.juyovo.com/picture/img/n1/202302271530577.png)

### 入门

``` sql
create database mydata;
use mydata;

-- 创建表
create table stu(
	name varchar(20),
	age int,
	score decimal(10,2)
)

create table tea(
	id int primary key,
	name varchar(20),
	score decimal(10,2)
)

-- 创建表后添加列名
alter table stu add id int primary key;

-- 修改某一列的列名
exec sp_rename 'stu.age','age1','column';

-- 删除某一个列名
alter table stu drop column age1;

-- 修改列的类型
alter table stu alter column name varchar(20) not null;

-- 查看表所有的约束
exec sp_helpconstraint @objname=stu;

-- 给列名添加主键(必须是非空字段)
alter table teacher add constraint pk_tea primary key (id);

-- 删除主键约束
alter table teacher drop constraint pk_tea;


select * from stu;
```

## 连接查询

### 内连接

**1、内连接: inner join**

通过等值连接实现内连接查询，用 = 或 <> 之类的运算符

``` sql
select d.info,s.code from student s, desc d where s.code = d.st_code
select * from student s inner join desc d on(s.code = d.st_code)
```

<img src="https://pic.juyovo.com/picture/img/n1/202302281200134.png" alt="image-20230228120025111" style="zoom:50%;" />

### 外连接

**1、左连接: left join（左表相关联的记录）**

``` sql
select * from student s left join desc d on(s.code = d.st_code)
```

<img src="https://pic.juyovo.com/picture/img/n1/202302281149996.png" alt="选出左表存在的记录" style="zoom:50%;" />

**2、右连接: right join（右表相关联的记录）**

``` sql
select * from student s right join desc d on(s.code = d.st_code)
```

<img src="https://pic.juyovo.com/picture/img/n1/202302281151683.png" alt="image-20230228115112660" style="zoom:50%;" />

**3、全连接: full join（两张表所有的记录）**

``` sql
select * from student s full join desc d on(s.code = d.st_code)
```

<img src="https://pic.juyovo.com/picture/img/n1/202302281156987.png" alt="image-20230228115614964" style="zoom:50%;" />

**3、交叉连接: cross join（两张表所有的结果，会产生笛卡尔积）**

``` sql
select * from student cross join desc
```

**4、子查询**

``` sql
select * from student ,chs where s.id in (chs.scode)
```

### 行号

* row_number() over(order by 字段)
* 前几个：top n

``` sql
select row_number() over(order by id) row from stu
select top 1 * from stu
```

### 模糊查询

``` sql
-- 左模糊
select * from student where name like '%张'

-- 右模糊
select * from student where name like '三%'

-- 模糊查询
select * from student where name like '%张三%'
```

### 分组、排序查询

``` sql
-- 分组查询
select * from student group by sex

-- 排序查询
select * from student order by [asc,desc]
```

### 常用函数

``` sql
-- 求和 sum
select sum(score) from student;

-- 平均数 avg
select avg(score) from student;

-- 数量 count
select count(score) from student;

-- 最大值 max
select max(score) from student;

-- 最小值 min
select min(score) from student;
```

### 去重

``` sql
distinct 字段
```



### 类型转换

``` sql
cast(函数(字段) as decimal(n,y) )
```

### 视图

**1、创建**

``` sql
create view 视图名称 as select 语句
```

**2、删除**

``` sql
if (exists (select * from sys.objects where name = 'v_stu'))
    drop view v_stu
```

### 备份表

``` sql
select * into 新表 from 旧表
```

### 修改

1、批量修改

``` sql
update stu set score = (select score from st_back sk where sk.id = stu.id)
```



### U9C前台显示字段

![image-20230301191131937](https://pic.juyovo.com/picture/img/n1/202303011911978.png)

### 触发器

#### DML触发器

**after 触发器 和 instead of 触发器：**

* **after** 触发器（insert、update、delete触发器）内的语句是在**操作执行之后（已经作用在表上）**才触发执行的

* **instead of** 触发器 并不会执行操作，那个操作仿佛就是一个触发的命令，有了这个命令，instead of 触发器触发了，就会执行触发器内的语句；若触发器内只有像 raiserror 、print之类的不含操作性的语句，那该操作并不会**真正的执行**，但在触发器内可以通过 inserted 或 deleted 表中获取到本该执行该操作而形成的数据。

https://www.cnblogs.com/mra-m/p/Instead_of_practice.html

**inserted表和deleted表存放的信息：**

| 修改操作         |    inserted表    |    deleted表     |
| :--------------- | :--------------: | :--------------: |
| 增加(INSERT)记录 |  存放新增的记录  |        无        |
| 删除(DELETE)记录 |        无        | 存放被删除的记录 |
| 修改(UPDATE)记录 | 存放更新后的记录 | 存放更新前的记录 |

**创建触发器**

语法：

``` sql
GO
create trigger trigger_name
on 表名
[WITH ENCRYPTION]
for [DELETE, INSERT, UPDATE]
as
	T-SQL语句

```

`WITH ENCRYPTION`表示加密触发器定义的SQL文本

`DELETE, INSERT, UPDATE`指定触发器的类型

**创建insert触发器**

``` sql
--创建insert触发器
create trigger trig_insert
on student
for insert
as
begin
    if object_id(N'student_sum',N'U') is null--判断student_sum表是否存在
        create table student_sum(stuCount int default(0));--创建存储学生人数的student_sum表
    declare @stuNumber int;
    select @stuNumber = count(*)from student;
    if not exists (select * from student_sum)--判断表中是否有记录
        insert into student_sum values(0);
    update student_sum set stuCount =@stuNumber; --把更新后总的学生数插入到student_sum表中
end
```

**修改触发器**

``` sql
-- 修改触发器语法
ALTER TRIGGER  trigger_name 
ON  -- 表名 
FOR [DELETE][,][INSERT][,][UPDATE]
AS
sql_statement;
```

**删除触发器**

``` sql
--语法格式:
	DROP  TRIGGER   [ trigger_name ] [ ,...n ]
参数:
 trigger: 要删除的触发器名称
 n:表示可以删除多个触发器的占位符  
```

#### DDL触发器

``` sql
create trigger tr_DDL on database
for DROP_TABLE,ALTER_TABLE
as
begin
	print '别想着删库！好好打你的代码'
 	rollback -- 回滚
end
```

### 事务

``` sql
定义事务：begin [tran|transaction] transacction_name
回滚事务：rollback [tran|transaction] transacction_name
提交事务：commit  [tran|transaction] update_0
```

### 杂七杂八

1. **定义变量**

``` sql
declare @var int
set @var = 10 -- 赋值
select @var -- 使用
```

2. **go 关键字**

	相当于是重新开了一个查询窗口，会清除所有的变量

3. **charindex 函数**

   ``` sql
   charindex(参数1，参数2)
   ```

   参数1：被查找的字符串

   参数2：要查找的字符串

   查找字符串，返回字符串的位置

4. **begin...end** 

   定义一个语句块，如果说语句是句子，那他就是段落

5. **判断表是否存在**

   ``` sql
   -- 方法一
   if object_id(N'student_sum',N'U') is null
   
   -- 方法二
   if Exists(select top 1 * from sysObjects where id=object_id(N'UserInfos') and xtype='U')
   
   -- 临时表
   if object_id(N'tempdb..#TempUsers',N'U') is not null
   ```

6. **判断数据库是否存在**

   ``` sql
   if exists(select * from master..sysdatabases where name = 'database_name')
   ```

7. **自定义异常**

   ``` sql
   begin
   
   	  set @outstr = 'customer exception';
   	  -- 抛出自定义的异常,在最后的catch块中统一处理异常
   	  RAISERROR (66666, -- Message id.
   		   16, -- Severity,
   		   1 -- State,
   		   ) ;	  
   end;
   
   begin catch	
   	if @@ERROR=66666 begin  -- 通过@@ERROR的值来判断是否是自定义的异常
   	    set @outstr = @outstr  + '---------------- customer exception';
   	end;
   	return;
   end catch;
   ```

   ```sql
   raiserror(Message id, Severity, State )
   ```

		1. Message id ： 异常的唯一标识，且这个值会被赋值给SQLServer的系统变量@@Error。
  	
   		自定义异常的Message Id建议使用50000以后的，因为50000以内的会被系统异常占用。
  	
		2. Severity ： 异常的级别。 可输入1—19的数值。1—10之间不会被catch捕获。19以后是非常严重的级别。
  	
  	  3. State ： 如果输入负值或大于255 的值会生成错误，产生错误则会中断数据库的连接
