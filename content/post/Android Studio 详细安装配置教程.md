---
title: Android Studio 详细安装配置教程
tags:
  - Android Studio
category:
  - 实用教程
date: 2021-05-18T06:02:20.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220719811.png'
id: GDFIMDiqdypdF5mGwxHtrk
---

## 安装JDK

Android Studio的开发环境是Java，需要得到jdk的支持才能正常运行，所以第一步需要先安装Jdk环境。首先到甲骨文中文官网下载jdk的安装包

https://www.oracle.com/cn/java/technologies/javase-downloads.html

推荐下载Java SE 8版本，最新的可能不太稳定，找到对应的操作系统，直接点击下载即可

or:

[直接下载windows版(1.8版本)](https://pan.juyovo.com/s/8Ootl)（网盘）

![img](https://pic.juyovo.com/picture/img/20210518142422.png)

## 配置环境变量

安装好了之后，接下来需要配置jdk的环境变量，也就是在你系统上的一个变量，以便运行时用到jdk

macOS配置环境变量

**将下载好的安装包打开安装**

![img](https://pic.juyovo.com/picture/img/20210518143725.png)

默认安装的目录是/Library/Java/JavaVirtualMachines 你也可以在安装的时候更改，我们需要记住安装的位置

![img](https://pic.juyovo.com/picture/img/20210518153301.png)

**配置**`JAVA_HOME`环境变量

打开终端，进入到用户的根目录

```bash
cd ~/
```

打开.bash_profile并且编辑:

```bash
open -e .bash_profile
```

然后在文件的末尾加入这一行语句：

注意替换成你当前的版本号

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home
```

![img](https://pic.juyovo.com/picture/img/20210518150452.png)

最后别忘了更新一下环境变量

```bash
source .bash_profile
```

**验证安装是否成功**

在终端输入：`java -version` 如果出现版本号则代表安装成功


windows配置环境变量

windows系统下配置jdk环境变量会有所不同

**将下载好的安装包打开安装**

傻瓜式的下一步即可，当然你可以选择要安装的的目录。

安装好了以后，找到jdk的安装目录，默认是C:\Program Files\Java\jdk1.8.0_291然后复制jdk的根目录

![img](https://pic.juyovo.com/picture/img/20210518153006.png)

## 新建JAVA_HOME

在桌面找到此电脑-右键-属性-滑到下面`高级系统设置`里面的`高级`-环境变量

然后我们要在下面一栏(`系统变量`)添加，点击新建

**变量名**为：`JAVA_HOME`

**变量值**为刚刚复制的jdk跟路径

最后点击确定

![img](https://pic.juyovo.com/picture/img/20210518154513.png)

## 新建classpath

再次点击新建

**变量名**为：`classpath`

**变量值**为根目录下的`lib`目录 C:\Program Files\Java\jdk1.8.0_291\lib。如果还有jre也要把jre下的lib目录添加进去 路径为：C:\Program Files\Java\jre1.8.0_291\lib

![img](https://pic.juyovo.com/picture/img/20210518160141.png)

⚠️注意前面加一个`.;`中间以英文状态下的分号`;`隔开。最后点击确定

## 添加Path环境变量

复制jdk根目录下的`bin`目录

回到系统变量，这里不用再新建一个Path，默认已经有了，双击打开Path。点击新建，

值为刚刚复制的bin目录的路径。最后点击确定就可以了。

验证是否安装成功：打开控制台输入：`java -version` 出现版本号则安装成功

![img](https://pic.juyovo.com/picture/img/20210518160129.png)


JDK安装完成之后，现在来安装Android studio

进入谷歌开发网站：https://developer.android.google.cn/studio 下载Android studio并且安装

打开安装包后询问你是否要导入配置不用管他，选择第二个 点击OK

![img](https://pic.juyovo.com/picture/img/20210518163055.png)

然后弹出谷歌收集软件的统计信息，也不用管，点击Don't send

![img](https://pic.juyovo.com/picture/img/20210518163109.png)

接着提示你第一次运行没有检测到SDK ，可以暂时先不管，点击Cancel

![img](https://pic.juyovo.com/picture/img/20210518164045.png)

然后会弹出如下界面，点击next

![img](https://pic.juyovo.com/picture/img/20210518163140.png)

下图为选择安装组件的形式，这里我们选择标准模式

![img](https://pic.juyovo.com/picture/img/20210518163127.png)

接下来是主题的选择，深色和浅色根据自己的喜好来，这里选择Light

![img](https://pic.juyovo.com/picture/img/20210518163157.png)

提示下载一些组件内容，点击finish

![img](https://pic.juyovo.com/picture/img/20210518163206.png)

等待下载完成就可以使用啦

## 可能会遇到的问题

- 第一次打开提示`Could not install Gradle distribution from 'https://services.gradle.org/distributions/gradle-6.7.1-bin.zip'.`那是因为没有安装Gradle（主要是镜像在国外下载太慢导致）

  解决办法：

  点击提示的链接下载gradle压缩包或者点击 [直接下载（网盘）](https://pan.youngwen.com/t/D4CKq5)(推荐)

  打开文件夹：

  Mac：/Users/用户名/.gradle/wrapper/dists/gradle-6.7.1-bin/bwlcbys1h7rz3272sye1xwiv6（如果隐藏了按shift+command+.显示）

  Windows：/C/Users/用户名/.gradle/wrapper/dists/gradle-6.7.1-bin/bwlcbys1h7rz3272sye1xwiv6

  将下载好的压缩包放到里面去就可以了，不用手动解压，然后重启Android studio。

- **错误1：**`Cannot start internal HTTP server. Git integration, JavaScript debugger and LiveEdit may operate with errors.`

  **错误2**：`Gradle sync failed: Connection timed out: connect. If you are behind an HTTP proxy, please configure the proxy settings either in IDE or Gradle.Consult IDE log for more details (Help | Show Log)`

  **问题原因：**

  Androidstudio的网络通信被网络防火墙阻止了，导致Gradle构建工具无法使用。

  **解决办法：**

  如下图，打开Window防火墙，允许AndroidStudio进行网络通信（选项提勾），如果没有找到AndroidStudio那一项，表示需要手动添加，按照下图添加即可。最后需要重新启动AndroidStudio或选择Gradle project sync一下，问题即可解决。

![图片来自csdn](https://pic.juyovo.com/picture/img/20210518170406.png)

![图片来自csdn](https://pic.juyovo.com/picture/img/20210518170517.png)

![图片来自csdn](https://pic.juyovo.com/picture/img/20210518170536.png)
