import {notFound} from "next/navigation"
import {allPosts} from "contentlayer/generated"
import {Mdx} from "@/components/common/mdx-components";
import MainColumn from "@/components/module/MainColumn";
import {format} from "date-fns";
import Link from "next/link";
import PageHeader from "@/components/module/PageHeader";
import useConfig from "@/lib/hook/useConfig";
import "@/styles/github-dark.min.css"
import BottomBlock from "@/components/page/post/BottomBlock";

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
                <div className={'flex items-center mt-3 text-gray-500'}>
                    <time dateTime={post.date}>{format(post.date, 'yyyy-MM-dd HH:mm:ss')}</time>
                    {post.category && (
                        post.category.map((category, index) => (
                            <Link href={'/category/' + category}
                                  className={'ml-2 z-[5] hover:text-blue-500 no-underline'}
                                  key={index}>{category}</Link>
                        ))
                    )}
                </div>
                <BottomBlock config={config} id={post.id}/>
            </PageHeader>
            <article className="py-6 px-6 flex-grow prose prose-pre:p-0 prose-pre:bg-[#0d1117] prose-blue max-w-full dark:prose-invert">
                <Mdx code={post.body.code}/>
            </article>
            <div className={'border-t flex flex-col gap-2 p-6 mt-6'}>
                <div><span className={'text-gray-500'}>标题：</span>{post.title}</div>
                <div><span className={'text-gray-500'}>作者：</span>{config.author.name}</div>
                <div>
                    <span className={'text-gray-500'}>链接：</span>
                    <a className={'text-blue-500'}
                        target='_blank'
                        href={`${config.site.url}/post/${post.id}`}
                    >
                        {(`${config.site.url}/post/${post.id}`)
                            .replace("http://", '')
                            .replace('https://', '')}
                    </a>
                </div>
                <div>
                    <span className={'text-gray-500'}>版权：</span>
                    本站文章除特别声明外，均采用
                    <a className={'text-blue-500'} target='_blank' href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">BY-NC-SA</a>
                    许可协议。转载请注明出处！
                </div>
            </div>
        </MainColumn>
    )
}
