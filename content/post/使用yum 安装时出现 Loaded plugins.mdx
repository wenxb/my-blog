---
title: '使用yum 安装时出现 Loaded plugins: fastestmirror 问题记录'
tags:
  - centos
category:
  - 日志记录
date: 2021-05-23T08:16:09.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220730121.png'
id: y18HDr6PNWBGgfgq2aEXh2
---

使用yum安装是出现 ： Loaded plugins: fastestmirror

[root@localhost yum.repos.d]# yum –y install httpd httpd-devel
Loaded plugins: fastestmirror

**解决办法：**

1. 修改插件配置文件

[root@localhost yum.repos.d]# vim/etc/yum/pluginconf.d/fastestmirror.conf

[main]
enabled=0 //由 1 改成0 ，禁用该插件
verbose=0
always_print_best_host = true
socket_timeout=3
\# Relative paths are relative to the cachedir (and so works for users as well
\# as root).
hostfilepath=timedhosts.txt
maxhostfileage=10
maxthreads=15
\#exclude=.gov, facebook
\#include_only=.nl,.de,.uk,.ie

1. 修改yum 配置文件

[root@localhost yum.repos.d]# vim /etc/yum.conf

9 plugins=0 //不使用插件

1. 清除缓存并重新构建yum 源

[root@localhost yum.repos.d]# yum clean all

[root@localhost yum.repos.d]# yum makecache

1. 使用yum 重新安装

后面又发现报错File “/usr/libexec/urlgrabber-ext-down“, line 28 except OSError, e: ^

原因：这是因为yum采用Python作为命令解释器，这可以从/usr/bin/yum文件中第一行#!/usr/bin/python发现。而python版本之间兼容性不太好，使得2.X版本与3.0版本之间存在语法不一致问题。而CentOS 7自带的yum采用的是python2.7，当系统将python升级到3.4后，出现语法解释错误。

解决方法：

```
vim /usr/libexec/urlgrabber-ext-down

#! /usr/bin/python  =》 #! /usr/bin/python_old
```
