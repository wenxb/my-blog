---
title: 关于个人在遇到 Synaptics.exe 蠕虫病毒的解决办法
tags:
  - 病毒
category:
  - 日志记录
date: 2022-09-06T03:19:52.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220848245.png'
id: hIOKKShcUlCHSLSgMrNiVM
---

首先说一下Synaptics.exe是个什么东西
Synaptics是一个感染性极强的蠕虫病毒，任何exe程序和Excel文件都有可能会被感染。
其本体位于 C:\ProgramData\Synaptics 中，需要 打开 **隐藏文件显示** 并 关闭 **隐藏受系统保护的文件** 选项后才能看到。
![img](https://pic.juyovo.com/picture/img/202209061154187.png)

![img](https://pic.juyovo.com/picture/img/202209061155069.png)

## 表现特征

来自吾爱破解：

**1、行动轨迹**：并行操作,不分先后
一是：其在C:\ProgramData\Synaptics创建原始病毒文件夹，内含“WS”子文件夹[为空]和“Synaptics.exe”文件[大小：754KB]。
二是：其在C:\用户***\AppData\Local\Temp中，释放文件“qk3296d7.exe”[大小：753KB，CRC32:7EB2AB4D]

上述二项特点：
①此程序图标显示为运行第一次感染的可执行程序，并使用其感染程序图标，其后随着使用者运行感染程序而改变；
②可执行程序被感染后，右键属性后发现“描述”内容被改变为：“Synaptics Pointing Device Driver”[被感染的文件属性改变相同，大小增大，且创建文件时间改变]；
③被感染文件首次执行时会在同文件夹内新产生一个和感染文件同名且前缀为：“.*cache*”的病毒文件[此文件隐藏]；
④系统被感染后，对任何插入的U盘，都会被病毒搜索到，并立即采取遍历可执行文件的方式感染。[成为新的感染源，使用者在不知不觉中，只要在其它电脑上运行U说服力中的程序，就会感染其它电脑。]
⑤病毒只感染可执行文件，和网银相关的文件[目的明确]，无法感染压缩文件。
⑥病毒首次在硬盘或U盘被触发传染时，硬盘灯或U盘指示灯会狂闪[说明在病毒在疯狂感染文件–就是写文件的过程]，同时会莫名弹窗提示文件没有权限，这可能是病毒Bug，也是提醒我们系统已经异常的警报。
⑦其在注册表中创建2个启动项：

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\MSConfig\startupreg\mydesk]
“key”=“SOFTWARE\Microsoft\Windows\CurrentVersion\Run”
“item”=“mydesk”
“hkey”=“HKCU”
“command”=“C:\Users\WWH\Desktop\mydesk 1.0.7.0\mydesk.exe”
“inimapping”=“0”
“YEAR”=dword:000007e4
“MONTH”=dword:00000004
“DAY”=dword:00000002
“HOUR”=dword:00000017
“MINUTE”=dword:0000001e
“SECOND”=dword:0000001e

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\MSConfig\startupreg\Synaptics Pointing Device Driver]
“key”=“SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run”
“item”=“Synaptics Pointing Device Driver”
“hkey”=“HKLM”
“command”=“C:\ProgramData\Synaptics\Synaptics.exe”
“inimapping”=“0”
“YEAR”=dword:000007e4
“MONTH”=dword:00000004
“DAY”=dword:00000002
“HOUR”=dword:00000017
“MINUTE”=dword:0000001e
“SECOND”=dword:0000001e

## 解决办法

### 1、删除启动项

打开注册表，找到上述两个注册表，直接删除。
或者直接Ctrl+F搜索Synatics注册表。所有包含该类词汇注册表直接删除即可。

### 2、删除病毒本体

使用一些暴力删除工具，一般杀毒软件都有这个功能，删除掉C:\ProgramData\Synaptics这个文件夹即可

### 3、使用火绒全盘查杀

用火绒全盘剿杀，并重新启动系统，再次全盘在剿杀
目的是为了将感染的其他文件清除掉，基本上桌面的所有exe程序无一幸免

### 4、使用工具再次查杀

火绒是直接将软件隔离，但是一些软件又不得不使用，如果想保留自己的软件，可以用下面这个工具。直接解压打开就可以了
下载链接：[全盘 U盘查杀Synaptics 恢复exe和xlsx文件](https://pan.juyovo.com/s/kVbhN)

最后建议，谨慎从网上下载运行软件，电脑常备一个管家
