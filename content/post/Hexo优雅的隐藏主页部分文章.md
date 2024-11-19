---
title: Hexo优雅的隐藏主页部分文章
tags:
  - Hexo
category:
  - 实用教程
date: 2021-04-27T09:27:17.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220728082.png'
id: j91HO0G0iysAyn1tQMWLif
---

## 前言

> 如果你想让某些文章，比如一些不太重要的文章不想让它出现在主页。但是他又存在于你的文章目录中，那么有这样一款插件。

这款插件在原有的基础上增加了过滤功能。除此之外，它还可以在指定的目录下生成指定类型的文章。

> GitHub地址：[hexo-generator-index2](https://github.com/Jamling/hexo-generator-index2)

## 安装

使用它之前必须先把原来官方的插件卸载掉，再安装这款插件，不然可能会起冲突。

```bash
npm install hexo-generator-index2 --sava
npm uninstall hexo-generator-index --sava
```

## 配置

添加以下配置到博客根目录下的配置文件(不是主题的！)

```yml
# index2 generator是否包含官方的hexo-generator-index，默认true（包含）
index2_include_index: true 
# 配置index2 generator，可以是数组或对象
index2_generator:
  per_page: 10
  order_by: -date
  include:
    - category Web # 只包含Web分类下的文章
  exclude:
    - tag Hexo # 不包含标签为Hexo的文章
```

- **per_page**：每页显示的帖子。(0 =禁用分页)
- **order_by**：文章的顺序。(默认按日期降序排列)
- **layout**: 设置布局，默认是索引
- **path**: 输出路径，如果path为''，表示输出到根目录(http://127.0.0.1:4000/)
- **index**: 是否为主索引，如果为true且路径为'',和官方的hexo-generator-index一样
- **include**: 文章过滤包含选项
- **exclude**: 文章过滤不包含选项

Include/exclude 选项格式为`属性 值`（注意，属性与值中间有个英文的空格），可选的属性有：

- category: 文章分类
- tag: 文章标签
- path: 文章源路径

例如想隐藏`hide`目录下的文章：

```yml
# index2 generator是否包含官方的hexo-generator-index，默认true（包含）
index2_include_index: true 
# 配置index2 generator，可以是数组或对象
index2_generator:
  per_page: 10
  order_by: -date
  exclude:
    - path hide #则填入"- path hide" 注意缩进格式
```
