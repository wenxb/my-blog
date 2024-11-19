---
title: Markdown常用基础语法_一种优雅的写作方式
tags:
  - Markdown
  - MD
category:
  - 日志记录
date: 2023-02-04T02:05:28.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220852372.png'
id: hhXPq4HCxGtNkqb4IdSTSH
---

## 介绍
md（Markdown） 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
对于程序员来说，md是最好不过的书写方式了。可以用它来记笔记、写博客或者其他用途。
同时md可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。

![](https://pic.juyovo.com/picture/img/n1/202302040949275.png)

## 写作工具
在本地写作的话，我想最多人使用的就是Typora，简洁且好用、并且内置了与picgo结合的图床上传工具。  
破解版下载：https://www.juyovo.com/58.html

## 常用语法
### 1、标题

``` 
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```
效果：
![](https://pic.juyovo.com/picture/img/n1/202302041026772.png)
### 2、段落格式

正常的段落直接书写就好，段落后面需要跟两个以上空格换行，也可以直接回车换行。

#### 字体：

```
*我是斜体*
_我怎么变斜了_

**我是粗体**
__粗大的梧桐树__

***我是粗斜体***
___邪恶终将被打败___
```


![](https://pic.juyovo.com/picture/img/n1/202302041026490.png)

#### 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线


```
***

* * *

*****

- - -

----------
```


![](https://pic.juyovo.com/picture/img/n1/202302041037069.png)

#### 删除线
只需要在文字的两端加上两个波浪线 `~~` 即可


```
今夜月明人尽望，不知秋思落谁家
~~今夜月明人尽望，不知秋思落谁家~~
```

![](https://pic.juyovo.com/picture/img/n1/202302041042620.png)

#### 下划线
下划线可以通过 HTML 的 <u> 标签来实现：

```
<u>枯藤老树昏鸦，小桥流水人家</u>
```

![](https://pic.juyovo.com/picture/img/n1/202302041050919.png)

#### 脚注
脚注是对文本的补充说明。

Markdown 脚注的格式如下:

```
寂寞梧桐深院锁清秋 [^tag]。

[^tag]: 李煜《相见欢·无言独上西楼》
```


![](https://pic.juyovo.com/picture/img/n1/202302041056304.png)

### 3、列表
#### 1. 无序列表

```
* 吃炸鸡
* 吃烧烤
* 吃火锅

+ 吃炸鸡
+ 吃烧烤
+ 吃火锅


- 吃炸鸡
- 吃烧烤
- 吃火锅
```

![](https://pic.juyovo.com/picture/img/n1/202302041104333.png)

#### 2. 有序列表
有序列表使用数字并加上 . 号来表示，注意后面有空格，例如：

```
1. 吃炸鸡
2. 吃烧烤
3. 吃火锅
```

![](https://pic.juyovo.com/picture/img/n1/202302041105662.png)

### 4、区块引用
Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：

```
> 剪不断，
> 理还乱，
> 是离愁，
> 别是一般滋味在心头。
```

![](https://pic.juyovo.com/picture/img/n1/202302041116604.png)
**嵌套：** 另外区块是可以嵌套的，一个 > 符号是最外层，两个 > 符号是第一层嵌套，以此类推：

```
> 剪不断，
> 理还乱，
>> 是离愁，
>>> 别是一般滋味在心头。
```

![](https://pic.juyovo.com/picture/img/n1/202302041118419.png)
    
### 5、代码
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（<kbd>\`</kbd>） ，例如：
```
`console.log("我爱吃橘子");` "我爱吃橘子"
```

![](https://pic.juyovo.com/picture/img/n1/202302041126671.png)
### 6、代码块
用 ``` 包裹一段代码，并指定一种语言（也可以不指定）：
> 下方`\`是为了防转义，可忽略掉。
```
\``` js
$(document).ready(function () {
    alert('HelloWorld');
});
\```
```

![](https://pic.juyovo.com/picture/img/n1/202302041131888.png)
    
### 7、链接
最常用的一种：
```
[百度一下](https://www.baidu.com/)
```
或者直接使用链接地址：
```
<https://www.baidu.com/>
```
效果：
![](https://pic.juyovo.com/picture/img/n1/202302041203339.png)
    
### 8、图片
Markdown 图片语法格式如下：  
`![alt 属性文本](图片地址)`

或者使用HTML标签可调整宽高：    
    
`<img src="https://pic.juyovo.com/picture/img/n1/202302041516024.png" width="50%" height="50%">`

效果：
![](https://pic.juyovo.com/picture/img/n1/202302041516024.png)
<hr>
<img src="https://pic.juyovo.com/picture/img/n1/202302041516024.png" width="50%" height="50%">

### 9、表格
Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。

语法格式如下：
    
```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |    
```
效果：
![](https://pic.juyovo.com/picture/img/n1/202302041522945.png)

**设置表格的对齐方式：**

-: 设置内容和标题栏居右对齐。  
:- 设置内容和标题栏居左对齐。  
:-: 设置内容和标题栏居中对齐。  
    
```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |    
```
效果：
![](https://pic.juyovo.com/picture/img/n1/202302041522044.png)


## 快捷键

|   功能   |  快捷键  |
| :------: | :------: |
|   加粗   | Ctrl + B |
|   斜体   | Ctrl + I |
|   引用   | Ctrl + Q |
| 插入链接 | Ctrl + L |
| 插入代码 | Ctrl + K |
| 插入图片 | Ctrl + G |
| 有序列表 | Ctrl + O |
| 无序列表 | Ctrl + U |
|   横线   | Ctrl + R |
|   撤销   | Ctrl + Z |
|   重做   | Ctrl + Y |
| 提升标题 | Ctrl + H |
