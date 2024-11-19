---
title: 小米刷入面具 Magisk 教程
tags:
  - 刷机
category:
  - 实用教程
date: 2022-04-22T00:42:57.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220843101.png'
id: cUwqi2g3tk2cwBAO6DLP6D
---

## 第一种（需要电脑）

**提醒：** 因为涉及到刷机，请提前做好备份

## 准备

简单说一下步骤

1. 准备好相关的资料：

- `Magisk 卡刷包`、`TWRP 刷入工具`、`小米解锁工具`、`待刷手机`、`电脑一台`
- `TWRP 刷入工具`获取方式可以去百度 `你的机型 + TWRP`

1. 解锁手机 BL 锁
2. 刷入第三方 recovery（TWRP）
3. 刷入面具

[面具安装包](https://pan.juyovo.com/s/Jjnfp)

[小米解锁工具](https://pan.juyovo.com/s/6druo)

> 将后缀.apk 改为.zip 即是刷机包，改为 uninstall.zip 即是卸载包

## 1. 解锁手机 BL 锁

> 新手机可能会出现 168 小时的情况，具体可到某宝解决

#### 绑定手机账号

![img](https://pic.juyovo.com/picture/img/202201182359550.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

手机登录你的账户，`设置`里 `MIUI 版本`连点`七下`进入开发者选项

![img](https://pic.juyovo.com/picture/img/202201190000888.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

------

![img](https://pic.juyovo.com/picture/img/202201190003493.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

手机关机按下音量下键和关机键进入 Fastboot（兔子界面）解压文件 安装驱动（MiUsbDriver.exe）打开解锁工具（miflash_unlock.exe）登录手机上绑定的账号 数据线连接手机 进行解锁 手机重启

![img](https://pic.juyovo.com/picture/img/202201190005090.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)![img](https://pic.juyovo.com/picture/img/202201190006644.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

## 刷入 TWRP

再次进入 Fastboot（兔子界面）解压下载好的 TWRP 刷入工具 根据提示进行刷入，相信难不到你

![img](https://pic.juyovo.com/picture/img/202201190019301.png?imageMogr2/format/jpg/interlace/0/quality/90%7Cwatermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

## 刷入面具

手机音量上键+开机键进入 rec 滑动按钮允许修改

> 有的 TWRP 集成了面具的刷机包，可直接在高级或高级-小米工具箱里面即可安装面具，如果没有请看下一步

手机连接电脑 将面具刷机包复制到手机 手机点击安装 再找到刷机包 点击刷入即可

## 第二种（无需电脑）

![img](https://pic.juyovo.com/picture/img/202201190042981.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10) ![img](https://pic.juyovo.com/picture/img/202201190043753.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10) ![img](https://pic.juyovo.com/picture/img/202201190043705.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10) ![img](https://pic.juyovo.com/picture/img/202201190045847.png?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

首先你得确保手机升级到开发版 在手机管家-应用管理-权限-ROOT 权限里打开权限 之后手机会重启 手机安装.apk 安装包 打开面具 给予 ROOT 权限
