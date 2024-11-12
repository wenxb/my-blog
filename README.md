y-blog是由 [nextjs](https://nextjs.org/) 开发的个人博客网站，使用一种比md更高级的`.mdx`文件书写文章

如果你还不会Markdown语法，查看[Markdown 速成指南](Markdown-Use.md)

## 开始

1. 克隆此项目 `git clone xxx`
2. 复制`config.example.yml`文件，重命名为`config.yml`，修改各个参数，配置文件有详细的注释
3. 本地预览（可选）
3. [部署](#部署)

## 本地预览

前提条件：[Nodejs >= 18.18](https://nodejs.org/)

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

在项目的`content/post`目录下新建一个文件，比如：`我的博客文章.mdx`

### Front Matter

在文章顶部使用两个---包裹，可以参考初始化文章：[My First Post.mdx](content%2Fpost%2FMy%20First%20Post.mdx)

里面可以嵌套多层文件夹，不要使用`test`作为文件夹名称

| 字段       | 说明                     | 示例                                                      |
|----------|------------------------|---------------------------------------------------------|
| id       | 文章的唯一id，由程序自动生成，无需手动指定 | -                                                       |
| title    | 文章的标题                  | 一群母猪排队掉进了水沟                                             |
| desc     | 文章的摘要                  | hahaha                                                  |
| category | 文章分类                   | category: <br/># 提示： - 前后都有一个空格<br/>  - 恋爱教程<br/>- 葵花宝典 |
| date     | 文章发布时间，不填自动生成当前时间      | 2022-11-11T00:05:20Z 或者  2022-12-12                     |
| draft    | 是否为草稿                  | true或者false                                             |

## 部署

