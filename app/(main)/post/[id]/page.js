import {notFound} from "next/navigation"
import {allPosts} from "contentlayer/generated"
import MainColumn from "@/components/module/MainColumn";
import {format} from "date-fns";
import Link from "next/link";
import PageHeader from "@/components/module/PageHeader";
import useConfig from "@/lib/hook/useConfig";
import BottomBlock from "@/components/page/post/BottomBlock";
import SideRightWrap from "@/components/sideRight/SideRightWrap";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import PostToc from "@/components/common/PostToc";
import Twikoo from "@/components/module/comment/Twikoo";
import NoSsr from "@/components/common/NoSsr";
import ValineCom from "@/components/module/comment/Valine";
import DynamicScript from "@/components/common/DynamicScript";
import PostPagePv from "@/components/page/post/PostPagePv";

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
    const config = useConfig()

    if (!post) {
        return {}
    }

    let keywords = post?.keywords || []

    if (!keywords?.length) {
        if (post?.category) {
            keywords = post.category.join(' ')
        }
    }

    return {
        title: post.title,
        description: post.desc,
        keywords,
        openGraph: {
            title: post.title,
            description: post.desc,
            url: `${config.site.url}/post/${post.id}`,
        }
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
    const {envId, lang, region} = config.comment.twikoo
    const {appId, appKey, lang: valineLang} = config.comment.valine
    const commentType = config.comment.type

    if (!post) {
        notFound()
    }

    return (
        <>
            <MainColumn>
                <PageHeader scrollShowBarSlot barSlot={(
                    <div className={'font-semibold text-xl line-clamp-1'}>{post.title}</div>
                )} title={post.title} footer={(
                    <BottomBlock config={config} id={post.id}/>
                )}>
                    <div className={'flex items-center text-foreground/60'}>
                        <time dateTime={post.date}>{format(post.date, 'yyyy-MM-dd HH:mm:ss')}</time>
                        {post.category && (
                            post.category.map((category, index) => (
                                <Link href={'/category/' + category}
                                      className={'ml-2 z-[5] hover:text-blue-500 no-underline'}
                                      key={index}>{category}</Link>
                            ))
                        )}
                        <NoSsr>
                            <PostPagePv/>
                        </NoSsr>
                    </div>
                </PageHeader>
                <article id={'article-content'}
                         className="p-6 article-content">
                    <MarkdownRenderer md={post.body.raw}/>
                </article>
                <div className={'border-t flex flex-col p-6 mt-6'}>
                    <div className={'text-base'}>{post.title}</div>
                    <div className={'text-foreground/60'}>{config.author.name}</div>
                    <div className={'my-2'}>
                        <a className={'text-blue-500 border-b border-transparent hover:border-blue-500'}
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
                        <a className={'text-blue-500 border-b border-transparent hover:border-blue-500'} target='_blank'
                           href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">BY-NC-SA</a>
                        许可协议。转载请注明出处！
                    </div>
                </div>

                {config.comment?.enable && (
                    <NoSsr>
                        <div className={'mt-3 border-t px-4 py-3'}>
                            {commentType === 'twikoo' &&
                                <Twikoo envId={envId || ''} region={region || ''} lang={lang || 'zh-CN'}/>}
                            {commentType === 'valine' &&
                                <ValineCom lang={valineLang || 'zh-CN'} appId={appId} appKey={appKey}/>}
                        </div>
                    </NoSsr>
                )}
            </MainColumn>
            <SideRightWrap stickyWrap={
                <>
                    <PostToc/>
                </>
            }/>
            <DynamicScript src={'//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'}/>
        </>
    )
}
