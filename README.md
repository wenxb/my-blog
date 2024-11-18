y-blog是由 [nextjs](https://nextjs.org/) 开发的个人博客网站，使用`.mdx`格式的文件来书写文章

如果你还不会Markdown语法，查看[Markdown 速成指南](Markdown-Use.md)

## 开始

1. 克隆此项目 `git clone xxx`
2. 复制`config.example.yml`文件，重命名为`config.yml`，修改各个参数，配置文件有详细的注释
3. 本地预览（可选）
4. [部署](#部署)

## 本地预览

环境要求：[Nodejs >= 18.18](https://nodejs.org/)

如果需要使用音乐功能，需进行以下配置：

首次运行下面的命令后，会在`keys/`目录下生成`public.pem`（公钥）和`private.pem`（私钥）两个文件，或者你可以自己手动生成

将根目录`.env.example`文件重命名为`.env`

复制**公钥**文件的内容替换到`NEXT_PUBLIC_PUB_KEY`

复制**私钥**文件的内容替换到`PRIVATE_KEY`

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

运行上面其中一条命令，用浏览器打开 [http://localhost:10001](http://localhost:10001)

## 如何写作

### 创建文章

在项目的`content/post`目录下新建一个`.mdx`结尾的文件，比如：`我的博客文章.mdx`

书写方法和markdown并无区别

### Front Matter

Front Matter用于表示文章的信息、标题、分类、id等等，在文件顶部使用两个---包裹

**嵌套的文件夹**：`content/post`目录下可以嵌套多层文件夹，不会对文章有任何影响，但不要使用`test`作为文件夹名称

| 字段       | 说明                     | 示例                                                        |
|----------|------------------------|-----------------------------------------------------------|
| id       | 文章的唯一id，由程序自动生成，无需手动指定 | -                                                         |
| title    | 文章的标题                  | 假如生活欺骗了你                                                  |
| desc     | 文章的摘要                  | 那就假装什么也没发生                                                |
| category | 文章分类                   | # 注意： - 前后都有一个空格<br/>category: <br/> - 分类字段1<br/> - 分类字段2 |
| date     | 文章发布时间，不填自动生成当前时间      | 2022-11-11T10:22:22+08:00 或者  2022-12-12                  |
| draft    | 是否为草稿                  | true或者false                                               |

## 部署

如果需要使用音乐功能，需配置环境变量公钥：`NEXT_PUBLIC_PUB_KEY`和私钥`PRIVATE_KEY`，用于音乐接口的加密
