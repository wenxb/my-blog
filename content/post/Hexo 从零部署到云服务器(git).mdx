---
title: Hexo 从零部署到云服务器(git)
tags:
  - Hexo
category:
  - 实用教程
date: 2022-04-13T07:49:05.000Z
image: 'https://pic.juyovo.com/picture/blog/202306220724982.png'
id: zb0VaKb7j9u9ldohzkGzxR
---

## 本地配置(搭建 hexo)

以下提供两种不同的搭建方法，请对照食用

搭建 hexo 前，先安装必要的运行的环境

## Windows 搭建 hexo

### 安装 git

进入[网站](https://git-scm.com/download/win) 下载对应操作系统版本的安装包，然后安装即可

![img](https://pic.juyovo.com/picture/img/20210619093210.png)

查看是否安装成功，控制台输入 `git --version` 出现版本号代表安装成功

### 安装 Node

前往官网[点我前往](https://nodejs.org/zh-cn/download/) 下载安装包，然后安装即可

![img](https://pic.juyovo.com/picture/img/20210619094020.png)

> Windows 用户使用 Node.js 官方安装程序时，请确保勾选 **Add to PATH** 选项（默认已勾选）

查看是否安装成功：控制台输入 `node -v` 出现版本号代表安装成功

**安装 node 可能会出现的问题**

如果不能正常显示版本号，检查环境变量里面的 Path 是否有 nodejs 的跟路径。没有就将 nodejs 根目录添加进环境变量 - Path 里面。

环境变量面板进入方法：桌面右键此电脑 - `属性` - `高级系统设置` - `高级` - `环境变量`

![img](https://pic.juyovo.com/picture/img/20210619115626.png)

如果你不想让全局模块安装在 C 盘（建议一开始将 node 的安装目录更改为 D 盘或其他盘）。默认运行 npm install express `-g`（`-g` 代表全局安装）会将全局模块安装到（C:\Users\ 用户名 \AppData\Roaming\npm）路径中，这样占用了 C 盘空间。

- 更改全局模块安装路径和缓存路径

  首先在 node 根目录创建两个文件夹 `node_cache` `node_global` 创建好后，进入控制台，输入

  ```
  npm config set prefix "D:\nodejs\node_global"  //替换你的路径
  npm config set cache "D:\nodejs\node_cache"  //替换你的路径
  ```

- 设置环境变量

  - 在`系统变量`里面点击新建，变量名为 **NODE_PATH** 变量值为 `D:\nodejs\node_global\node_modules` 点击确定

  ![img](https://pic.juyovo.com/picture/img/20210619115721.png)

  - 在`用户变量`里面点击 `Path`- `编辑`，选择那个默认的路径点击编辑将其更改为 `node_global` 的路径

  ![img](https://pic.juyovo.com/picture/img/20210619115752.png)

**测试**：控制台输入 `npm install express -g` 如果 node_global 目录下出现模块的目录则安装成功

## macOS 搭建 hexo

## 安装 git

进入 [git](https://git-scm.com/download/mac) 官网，提供多种安装方式，根据提示安装即可

如果你已有了 Xcode 就不需要安装了， Xcode 自带了 git

当然也可以通过官网的方式安装

![img](https://pic.juyovo.com/picture/img/20210619113947.png)

查看是否安装成功，控制台输入 `git --version` 出现版本号代表安装成功

### 安装 node

可使用[官方地址](https://nodejs.org/en/download/)的安装包或 [Homebrew](https://brew.sh/) 或 [MacPorts](http://www.macports.org/) 安装。

查看是否安装成功：控制台输入 `node -v` 出现版本号代表安装成功

### 安装 Hexo

打开 CMD 控制台，输入

```
npm install -g hexo-cli
```

就安装好了

### 初始化 hexo

执行一下命令

```
hexo init <folder>  //folder为博客项目名
cd <folder>  //进入folder
npm install  //安装必要的模块
```

执行完以后，会在博客生成以下文件

```
.
├── _config.yml   ##网站的配置文件
├── package.json  ##模块包的描述/应用程序的信息
├── scaffolds  ##模版文件夹
├── source  ##资源文件夹
|   ├── _drafts  ##文章草稿
|   └── _posts  ##文章真实存在目录
└── themes  ##主题文件夹
```

### 安装 Hexo

打开 CMD 控制台，输入

```
npm install -g hexo-cli
```

### 初始化 hexo

执行以下命令

```
hexo init <folder>  //folder为博客项目名
cd <folder>  //进入folder
npm install  //安装必要的模块
```

执行完以后，会在博客生成以下文件

```
.
├── _config.yml   ##网站的配置文件
├── package.json  ##模块包的描述/应用程序的信息
├── scaffolds  ##模版文件夹
├── source  ##资源文件夹
|   ├── _drafts  ##文章草稿
|   └── _posts  ##文章真实存在目录
└── themes  ##主题文件夹
```

## 服务器端配置

### 安装 Git

```bash
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel
yum install -y git
```

查看是否安装成功：输入 `git --version` 出现版本号代表安装成功

### 创建用户仓库

```
useradd git
passwd git // 设置密码
su git //切换到git用户
cd /home/git/
mkdir -p projects/blog // 网站存在的真实目录
mkdir repos && cd repos
git init --bare blog.git // 初始化一个仓库
```

### 写入钩子

```
cd blog.git/hooks
vi post-receive // 创建 hook 钩子函数
```

输入以下内容

```
#!/bin/sh
git --work-tree=/home/git/projects/blog --git-dir=/home/git/repos/blog.git checkout -f
```

### 修改权限

```
chmod +x post-receive
exit // 退出到 root 登录
chown -R git:git /home/git/repos/blog.git // 添加权限
```

### 实现免密（本地电脑）

新建一个证书（有就不用）

```
ssh-keygen -t rsa -C "你的邮箱"
```

复制密钥到服务器

```
ssh-copy-id -i C:/Users/yourname/.ssh/id_rsa.pub git@server_ip 
ssh git@server_ip // 测试能否登录
```

`yourname` 为你的用户名

`server_ip` 服务器 IP 地址

复制密钥会让你输入一次Git用户密码，之后就不需要密码了

### 禁用 shell 登录

为了安全起见禁用 git 用户的 shell 登录权限，从而只能用 git clone，git push 等登录

```
su root //切换root用户
cat /etc/shells // 查看 git-shell 是否在登录方式里面
which git-shell // 查看是否安装
vi /etc/passwd  //修改 /etc/passwd 中的权限
// 将原来的
git:x:1000:1000::/home/git:/bin/bash

// 修改为 
git:x:1000:1000::/home/git:/usr/bin/git-shell
```

### hexo 配置

### 安装插件

```
npm install hexo-deployer-git --save
```

打开_config.yml 配置文件，找到 deploy

```
deploy:
  - type: git
    repository:
      server: git@server_ip:/home/git/repos/blog.git
    branch: master
```

在 package.json 中添加 npm 脚本

```
"scripts": {
  "deploy": "hexo clean && hexo g && hexo d",
  "start": "hexo clean && hexo g && hexo s"
},
```

即可使用 `npm run start` 开启本地预览

调试好以后通过 `npm run deploy` 上传到服务器
