import {notFound} from "next/navigation"
import {allPosts} from "contentlayer/generated"
import {Mdx} from "@/components/common/mdx-components";
import MainColumn from "@/components/module/MainColumn";
import {format} from "date-fns";
import Link from "next/link";
import PageHeader from "@/components/module/PageHeader";
import useConfig from "@/lib/hook/useConfig";
import "@/styles/github-dark.min.css"

async function getPostFromParams(params) {
    let id = params.id
    const post = allPosts.find((post) => post.id === id)

    if (!post) {
        return null
    }

    return post
}

export async function generateMetadata({params}) {
    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.desc,
    }
}

export const dynamicParams = false;
export function generateStaticParams() {
    return allPosts.map((post) => ({
        id: post.id,
    }));
}

export default async function PostPage({params}) {
    const post = await getPostFromParams(params)
    const config = useConfig()

    if (!post) {
        notFound()
    }

    return (
        <MainColumn>
            <PageHeader title={post.title}>
                <div className={'flex items-center text-sm mt-3 text-neutral-500'}>
                    <time dateTime={post.date}>{format(post.date, 'yyyy-MM-dd HH:MM:SS')}</time>
                    {post.category && (
                        post.category.map((category, index) => (
                            <Link href={'/category/' + category}
                                  className={'ml-2 z-[5] hover:text-blue-500 no-underline'}
                                  key={index}>{category}</Link>
                        ))
                    )}
                </div>
            </PageHeader>
            <article className="py-6 px-6 flex-grow prose prose-pre:p-0 prose-pre:bg-[#0d1117] prose-blue max-w-full dark:prose-invert">
                <Mdx code={post.body.code}/>
            </article>
            <div className={'border-t flex flex-col gap-2 text-sm p-6 mt-6'}>
                <div><span>标题：</span>{post.title}</div>
                <div><span>作者：</span>{config.author.name}</div>
                <div>
                    <span>链接：</span>
                    <a
                        target='_blank'
                        href={`${config.site.url}/post/${post.id}`}
                    >
                        {(`${config.site.url}/post/${post.id}`)
                            .replace("http://", '')
                            .replace('https://', '')}
                    </a>
                </div>
                <div>
                    本站文章除特别声明外，均采用
                    <a target='_blank' href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">BY-NC-SA</a>
                    许可协议。转载请注明出处！
                </div>
            </div>
        </MainColumn>
    )
}
