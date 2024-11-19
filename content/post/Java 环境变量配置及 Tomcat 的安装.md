---
title: Java 环境变量配置及 Tomcat 的安装
category:
  - 日志记录
date: 2022-04-10T09:09:00.000Z
image: 'https://img2.imgtp.com/2024/05/29/PKgt3v73.png'
id: ZvPQyc18pWRDJrKXp4CuKW
---

`Tomcat`服务器是一个免费的开放源代码的Web 应用服务器，是开发和调试JSP 程序的首选

Tomcat和IIS等Web服务器一样，具有处理HTML页面的功能，另外它还是一个Servlet和JSP容器，独立的Servlet容器是Tomcat的默认模式

简单来说就是在电脑上开启一个空间，用户可以访问里面的东西，主要用于jsp

## 配置 Java 环境变量

JSP 是基于Java的，所以必然少不了 Java 的支持

安装好JDK以后，找到jdk根目录，默认是C:\Program Files\Java\jdk1.8.0_291

然后复制 jdk 的**根路径**
![img](https://pic.juyovo.com/picture/img/20210518153006.png)

### 新建 JAVA_HOME

右键 **此电脑**-–**属性**-找到 **高级系统设置** - **高级** – **环境变量**

在 **系统变量** 里面点击新建

变量名为：JAVA_HOME

变量值为刚刚复制的 **jdk跟路径**

最后点击确定
![img](https://pic.juyovo.com/picture/img/20210518154513.png)

### 新建classpath

再次点击新建

变量名为：classpath

变量值为lib目录的路径

比如：C:\Program Files\Java\jdk1.8.0_291\lib。

如果还有jre也要把jre下的lib目录添加进去

比如：C:\Program Files\Java\jre1.8.0_291\lib

![img](https://pic.juyovo.com/picture/img/20210518160141.png)

⚠️注意前面加一个.;中间以英文状态下的分号;隔开。最后点击确定

### 添加Path环境变量

复制jdk根目录下的bin目录的路径

回到系统变量，这里不用再新建一个Path，默认已经有了，双击打开Path。点击新建，

值为刚刚复制的bin目录的路径。最后点击确定就可以了。

![img](https://pic.juyovo.com/picture/img/20210518160129.png)

验证是否安装成功：打开控制台输入：java -version 出现版本号则安装成功

## Tomact 安装

下载解压以后
这里简单说明一下几个必要的

**启动 Tomact**：双击 bin/下面的 **startup.bat**文件，会打开一个命令行窗口

**关闭 Tomact**：其实可以按两下 `Ctrl` + `C` 或者直接关闭窗口，又或者双击 shutdown.bat

![img](https://pic.juyovo.com/picture/img/202203011943998.png)

运行成功：

![img](https://pic.juyovo.com/picture/img/202203011943802.png)

**端口问题**
默认启用的是80端口，一般如果你的电脑没有运行其他web服务可以不用更改，如果端口被其他服务占用

**修改服务器端口**
打开conf/下的server.xml 找到

```xml
<Server port="8000" shutdown="SHUTDOWN">
  <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
  <!-- Security listener. Documentation at /docs/config/listeners.html
  <Listener className="org.apache.catalina.security.SecurityListener" />
```

更改 **port** 为其他端口即可

**项目存放目录**： webapps/ROOT

## 软件：

JDK：https://pan.juyovo.com/s/3jJsQ
Tomact：https://pan.juyovo.com/s/VXph3
