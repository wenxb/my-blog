import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `page/**/*.md`,
    fields: {
        title: {type: "string", required: true,},
        desc: {type: "string"},
    },
}))

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `post/**/*.md`,
    fields: {
        title: {type: 'string', required: true},
        desc: {type: "string", required: false},
        description: {type: "string", required: false},
        image: {type: "string", required: false},
        cover: {type: "string", required: false},
        category: {type: "list", of: {type: 'string'}},
        Keywords: {type: "list", of: {type: 'string'}},
        categories: {type: "list", of: {type: 'string'}},
        draft: {type: 'boolean', default: false},
        tags: {type: 'list', of: {type: 'string'}},
        date: {type: 'date', required: true},
        id: {type: 'string', required: true},
    },
    computedFields: {
        id: {
            type: 'string',
            resolve: (doc) => {
                return doc.id?.trim()
            },
        },
        cover: {
            type: 'string',
            resolve: (doc) => {
                return doc?.cover ?? doc?.image ?? ''
            }
        },
        desc: {
            type: 'string',
            resolve: (doc) => {
                return doc?.desc ?? doc?.description ?? ''
            }
        },
        category: {
            type: 'list',
            resolve: (doc) => {
                if (doc?.category?._array?.length) {
                    return doc.category?._array?.map(c => c.trim())
                }
                if (doc?.categories?._array?.length) {
                    return doc.categories?._array?.map(c => c.trim())
                }
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
})
