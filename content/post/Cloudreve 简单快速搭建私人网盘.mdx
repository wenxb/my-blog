---
title: Cloudreve 简单快速搭建私人网盘
tags:
  - 网盘
category:
  - 软件资源
date: 2022-04-11T15:00:42.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220841048.png'
id: kIEWz3s9PDm0UYUXaSNXTo
---

## 简介

Cloudreve 可以让您快速搭建起公私兼备的网盘系统。Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统。

橘柚云盘也采用 Cloudreve 搭建 [预览地址](https://pan.juyovo.com/)

## 特点

- **GO 语言：**最新版采用 Go 语言开发，无需 PHP 环境，对配置要求更低，它能帮您快速以最低的成本搭建一个公私兼备的网盘系统。
- **多端存储：**支持本机、从机、七牛、阿里云 OSS、腾讯云 COS、又拍云、OneDrive (包括世纪互联版) 作为存储端
- **直传/支持限速：**上传/下载 支持客户端直传，支持下载限速
- **离线下载：**可对接 Aria2 离线下载，可使用多个从机机点分担下载任务
- **在线解/压缩：**在线 压缩/解压缩、多文件打包下载
- **WebDAV 协议：**覆盖全部存储策略的 WebDAV 协议支持
- **拖拽上传：**拖拽上传、目录上传、流式上传处理
- **多用户管理：**文件拖拽管理，多用户、用户组
- **自动过期：**创建文件、目录的分享链接，可设定自动过期
- **在线预览：**视频、图像、音频、文本、Office 文档在线预览
- **黑暗模式：**自定义配色、黑暗模式、PWA 应用、全站单页应用
- **开箱即用：**All-In-One 打包，开箱即用等等

## 安装

你可以在 [GitHub Release](https://www.juyovo.com/?golink=aHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkcmV2ZS9DbG91ZHJldmUvcmVsZWFzZXM=) 页面下载压缩包

或直接下载：

[**Cloudreve_v\**3.3.2\****](https://pan.juyovo.com/s/GXzC7)

```
#解压获取到的主程序

tar -zxvf cloudreve_VERSION_OS_ARCH.tar.gz



# 赋予执行权限

chmod +x ./cloudreve



# 启动 Cloudreve

./cloudreve
```

**注意：**首次启动会创建初始管理员账号，先拿个小本本记好，账号密码只会出现一次

如果您忘记初始管理员密码，需要删除同级目录下的 `cloudreve.db`，重新启动主程序以初始化新的管理员账户。

Cloudreve 默认会监听 `5212` 端口。你可以在浏览器中访问 `http://服务器 IP:5212` 进入 Cloudreve。

## 宝塔安装方式

以下是通过宝塔的方式安装Cloudreve

### 反向代理

此时，程序已经运行起来了，下一步开启反向代理

如果安装了**宝塔**，在网站设置-反向代理-添加反向代理，填写内容如下

![img](https://pic.juyovo.com/picture/img/202202151136726.jpg?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

### 进程守护

这个时候的程序是在终端开启的，一旦关闭了终端程序也会被关闭，解决办法：

宝塔里面搜索安装 **Supervisor** 插件

![img](https://pic.juyovo.com/picture/img/202202151142204.jpg?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

添加进程守护

名称随意

运行目录：填写网站根目录

启动命令：网站根路径 + ./cloudreve

其他默认就行

![img](https://pic.juyovo.com/picture/img/202202151144902.jpg?imageMogr2/format/jpg/interlace/0/quality/90|watermark/2/text/YnnmqZjmn5rlsI_nq5k/font/c2ltaGVp6buR5L2TLnR0Zg/fontsize/16/fill/IzY2NjY2Ng/dissolve/80/gravity/southeast/dx/10/dy/10)

## 无宝塔安装

如果没有宝塔的话：

### 开启反向代理

```
location / {

    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_set_header Host $http_host;

    proxy_redirect off;

    proxy_pass http://127.0.0.1:5212;



    # 如果您要使用本地存储策略，请将下一行注释符删除，并更改大小为理论最大文件尺寸

    # client_max_body_size 20000m;

}
```

### 添加进程守护

**第一种：Systemd**

```
# 编辑配置文件

vim /usr/lib/systemd/system/cloudreve.service
```

将下文 `PATH_TO_CLOUDREVE` 更换为程序所在目录：

```
[Unit]

Description=Cloudreve

Documentation=https://docs.cloudreve.org

After=network.target

After=mysqld.service

Wants=network.target



[Service]

WorkingDirectory=/PATH_TO_CLOUDREVE

ExecStart=/PATH_TO_CLOUDREVE/cloudreve

Restart=on-abnormal

RestartSec=5s

KillMode=mixed



StandardOutput=null

StandardError=syslog



[Install]

WantedBy=multi-user.target
# 更新配置

systemctl daemon-reload



# 启动服务

systemctl start cloudreve



# 设置开机启动

systemctl enable cloudreve
```

管理命令：

```
# 启动服务

systemctl start cloudreve



# 停止服务

systemctl stop cloudreve



# 重启服务

systemctl restart cloudreve



# 查看状态

systemctl status cloudreve
```

**第二种：Supervisor**

首先安装 `supervisor`，已安装的可以跳过。

```
# 安装 supervisor

sudo yum install python-setuptools

sudo easy_install supervisor



# 初始化全局配置文件

sudo touch /etc/supervisord.conf

sudo echo_supervisord_conf > /etc/supervisord.conf
```

编辑全局配置文件：

```
sudo vim /etc/supervisord.conf
```

将文件底部的 `[include]` 分区注释符号`;` 删除，加入新的配置文件包含路径：

```
[include]

files = /etc/supervisor/conf/*.conf
```

创建 Cloudreve 应用配置所在文件目录，并创建打开配置文件：

```
sudo mkdir -p /etc/supervisor/conf

sudo vim /etc/supervisor/conf/cloudreve.conf
```

根据实际情况填写以下内容并保存：

```
[program:cloudreve]

# Clopudreve 主程序所在目录

directory=/home/cloudreve

# 主程序绝对路径

command=/home/cloudreve/cloudreve

# 自动开启

autostart=true

# 自动重启

autorestart=true

# 错误日志路径

stderr_logfile=/var/log/cloudreve.err

# 运行日志路径

stdout_logfile=/var/log/cloudreve.log

# 运行环境，默认就行

environment=CODENATION_ENV=prod
```

通过全局配置文件启动 supervisor：

```
supervisord -c /etc/supervisord.conf
```

日后你可以通过以下指令管理 Cloudreve 进程：

```
# 启动

sudo supervisorctl start cloudreve



# 停止

sudo supervisorctl stop cloudreve



# 查看状态

sudo supervisorctl status cloudreve
```

## Docker

你可以选择使用以下镜像部署：

[xavierniu/cloudreve](https://www.juyovo.com/?golink=aHR0cHM6Ly9odWIuZG9ja2VyLmNvbS9yL3hhdmllcm5pdS9jbG91ZHJldmU=)

现在你应该可以访问了

等一下，还没完

默认数据库使用的是 sqlite ，如果需要使用 MySQL，需要编辑配置文件

## 配置文件

根据官方文档，首次启动时，Cloudreve 会在同级目录下创建名为 `conf.ini` 的配置文件，你可以修改此文件进行一些参数的配置，保存后需要重新启动 Cloudreve 生效。

一个完整的配置文件示例如下：

```
[System]

; 运行模式

Mode = master

; 监听端口

Listen = :5000

; 是否开启 Debug

Debug = false

; Session 密钥, 一般在首次启动时自动生成

SessionSecret = 23333

; Hash 加盐, 一般在首次启动时自动生成

HashIDSalt = something really hard to guss



; SSL 相关

[SSL]

; SSL 监听端口

Listen = :443

; 证书路径

CertPath = C:UsersiDocumentsfullchain.pem

; 私钥路径

KeyPath = C:UsersiDocumentsprivkey.pem



; 启用 Unix Socket 监听

[UnixSocket]

Listen = /run/cloudreve/cloudreve.sock



; 数据库相关，如果你只想使用内置的 SQLite 数据库，这一部分直接删去即可

[Database]

; 数据库类型，目前支持 sqlite/mysql/mssql/postgres

Type = mysql

; MySQL 端口

Port = 3306

; 用户名

User = root

; 密码

Password = root

; 数据库地址

Host = 127.0.0.1

; 数据库名称

Name = v3

; 数据表前缀

TablePrefix = cd_

; 字符集

Charset = utf8

; SQLite 数据库文件路径

DBFile = cloudreve.db



; 从机模式下的配置

[Slave]

; 通信密钥

Secret = 1234567891234567123456789123456712345678912345671234567891234567

; 回调请求超时时间 (s)

CallbackTimeout = 20

; 签名有效期

SignatureTTL = 60



; 跨域配置

[CORS]

AllowOrigins = *

AllowMethods = OPTIONS,GET,POST

AllowHeaders = *

AllowCredentials = false



; Redis 相关

[Redis]

Server = 127.0.0.1:6379

Password =

DB = 0



; 缩略图

[Thumbnail]

MaxWidth = 400

MaxHeight = 300

FileSuffix = ._thumb

; 最大并行执行缩略图生成的数量，填写 -1 时会根据 CPU 核心数自动决定

MaxTaskCount = -1

; 可填写 jpg / png

EncodeMethod = jpg

; 是否在缩略图生成完毕后立刻进行垃圾回收

GCAfterGen = false

; 缩略图质量

EncodeQuality = 85
```

当然并不需要每个都配置

### 使用 MySQL

注意，Cloudreve 只支持大于或等于 5.7 版本的 MySQL，编辑配置文件后重启生效

更换数据库配置后，Cloudreve 会重新初始化数据库，原有的数据将会丢失。

```
[Database]

; 数据库类型，目前支持 sqlite/mysql/mssql/postgres

Type = mysql

; MySQL 端口

Port = 3306

; 用户名

User = root

; 密码

Password = root

; 数据库地址

Host = 127.0.0.1

; 数据库名称

Name = v3

; 数据表前缀

TablePrefix = cd

; 字符集

Charset = utf8
```

### 使用 Redis

请为 Cloudreve 指定未被其他业务使用的 DB，以避免冲突。

```
[Redis]

Server = 127.0.0.1:6379

Password = your password

DB = 0
```

重启 Cloudreve 后，可注意控制台输出，确定 Cloudreve 是否成功连接 Redis 服务器。使用 Redis 后，以下内容将被 Redis 接管：

- 用户会话（重启 Cloudreve 后不会再丢失登录会话）
- 数据表高频记录查询缓存（如存储策略、设置项）
- 回调会话
- OneDrive 凭证

### 启用 HTTPS

如果您正在使用 Web 服务器反向代理 Cloudreve，推荐您在 Web 服务器中配置 SSL，本小节所阐述的启用方式只针对使用 Cloudreve 内置 Web 服务器的情境下有效。

在配置配置文件中加入：

```
[SSL]

Listen = :443

CertPath = C:UsersiDocumentsfullchain.pem

KeyPath = C:UsersiDocumentsprivkey.pem
```

其中 `CertPath` 和 `KeyPath` 分别为 SSL 证书和私钥路径。保存后重启 Cloudreve 生效。

更多详细文档请前往 [官方文档](https://www.juyovo.com/?golink=aHR0cHM6Ly9kb2NzLmNsb3VkcmV2ZS5vcmcv)
