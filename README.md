y-blog是通过 [nextjs](https://nextjs.org/) 开发的个人博客网站，使用markdown来书写文章

如果你还不会Markdown语法，查看[Markdown 速成指南](Markdown-Use.md)

## 开始

1. 克隆此项目 `git clone xxx`
2. 复制`config.example.yml`配置文件，将其重命名为`config.yml`
3. 本地预览（可选）
4. [部署](#部署)

## 本地预览
环境要求：[Nodejs >= 18.18](https://nodejs.org/)

如果需要使用音乐功能，需在本地配置环境变量：

> 首次运行下面的命令后，会在`keys/`目录下生成`public.pem`（公钥）和`private.pem`（私钥）两个文件

**配置环境变量**：将根目录`.env.example`文件重命名为`.env`，复制`public.pem`文件的内容替换到`NEXT_PUBLIC_PUB_KEY`， 复制`private.pem`文件的内容替换到`PRIVATE_KEY`即可。

运行下面其中一条命令，用浏览器打开 [http://localhost:10001](http://localhost:10001)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 如何写作

### 如何新建文章
在项目的`content/post`目录下新建一个`.md`结尾的文件，比如：`我的博客文章.md`

> 嵌套的文件夹：`content/post`目录下可以嵌套多层文件夹，不会有任何变化影响。但不要使用`test`作为文件夹名称，test目录部署时不会包含进去

### Front Matter
Front Matter用于表示文章的标题、分类、发布日期等等，在文件顶部使用两个---包裹

| 字段                  | 说明                        | 类型     |
|---------------------|---------------------------|--------|
| id                  | 文章的唯一id，自动生成，无需手动指定，但必须唯一 | string |
| title               | 文章的标题（必填）                 | string |
| desc/description    | 文章的摘要                     | string |
| category/categories | 文章分类                      | array  |
| date                | 文章发布时间，默认根据预览或部署时的时间生成    | date   |
| draft               | 是否为草稿                     | bool   |
| keywords            | 文章的关键词，用于SEO，默认为文章分类      | array  |

## 部署

如果需要使用音乐功能，需配置环境变量`NEXT_PUBLIC_PUB_KEY`（公钥）和`PRIVATE_KEY`（私钥），用于音乐接口的加密，获取密钥方法参考上面**本地预览**

### 部署到Vercel
