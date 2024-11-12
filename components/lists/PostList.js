'use client'
import Link from "next/link";
import {formatDistance, subDays} from "date-fns";

const PostItem = ({post}) => {

    return (
        <li className={'list-none relative hover:bg-gray-100'}>
            <Link className={'absolute z-[2] inset-0'} href={'/post/' + post.id}/>
            <article className={'p-6 border-b'}>
                <h2 className={'font-semibold text-xl text-gray-800'}>{post.title}</h2>
                {post.desc && <p className={'text-slate-500 text-sm mt-2'}>{post.desc}</p>}
                <div className={'flex items-center text-sm mt-2 text-neutral-400'}>
                    <time
                        dateTime={post.date}>{formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })}</time>
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
