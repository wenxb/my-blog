import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkToc from 'remark-toc'

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `page/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {type: "string", required: true,},
        desc: {type: "string"},
    },
}))

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `post/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {type: 'string', required: true},
        desc: {type: "string", required: false},
        category: {type: "list", of: {type: 'string'}},
        draft: {type: 'boolean', default: false},
        tags: {type: 'list',of: { type: 'string' }},
        date: {type: 'date', required: true},
        id: {type: 'string', required: true},
    },
    computedFields:{
        id: {
            type: 'string',
            resolve: (doc) => {
                return doc.id?.trim()
            },
        },
    }
}))

const Yml = defineDocumentType(() => ({
    name: 'Yml',
    filePathPattern: `data/**/*.yml`,
    contentType: 'data',
    fields: {
        data: {type: 'list', of: {type: 'string'}},
    },
}))

const contentPath = './content'
export default makeSource({
    contentDirPath: contentPath,
    documentTypes: [Post, Page, Yml],
    mdx: {
        remarkPlugins: [remarkToc],
        rehypePlugins: [highlight],
    },
})
