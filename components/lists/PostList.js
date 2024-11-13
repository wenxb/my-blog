'use client'
import Link from "next/link";
import {formatDistance} from "date-fns";
import {zhCN} from 'date-fns/locale';


const PostItem = ({post}) => {
    return (
        <li className={'list-none relative hover:bg-gray-100 transition-colors'}>
            <Link className={'absolute z-[2] inset-0'} href={'/post/' + post.id}/>
            <article className={'p-6 border-b'}>
                <h2 className={'text-xl'}>{post.title}</h2>
                {post.desc && <p className={'text-neutral-400 text-sm mt-2'}>{post.desc}</p>}
                <div className={'flex items-center text-sm mt-3 text-gray-500'}>
                    <time
                        dateTime={post.date}>{formatDistance(new Date(), post.date, {locale: zhCN})}</time>
                    {post.category && (
                        post.category.map((category, index) => (
                            <Link href={'/category/' + category}
                                  className={'ml-2 z-[5] hover:text-blue-500'} key={index}>{category}</Link>
                        ))
                    )}
                </div>
            </article>
        </li>
    )
}

const PostList = ({data = []}) => {
    return (
        <ul>
            {data.map((post) => (
                <PostItem key={post.id} post={post}/>
            ))}
        </ul>
    );
};

export default PostList;
