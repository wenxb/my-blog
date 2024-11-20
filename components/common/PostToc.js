"use client"
import {useEffect, useState} from "react";
import tocbot from "tocbot";
import "./PostToc.scss"

const contentSelector = '#article-content'
const PostToc = () => {
    const [hasHeadings, setHasHeadings] = useState(true)

    useEffect(() => {
        tocbot.init({
            tocSelector: '#side-toc',
            contentSelector,
            headingSelector: 'h1, h2, h3, h4, h5, h6',
            collapseDepth: 2,
            scrollSmoothOffset: -54,
            headingsOffset: 54,
        });

        const checkHeadings = () => {
            const headings = document.querySelector(contentSelector).querySelectorAll('h1, h2, h3, h4, h5, h6');
            setHasHeadings(headings.length > 0);
        }

        checkHeadings()
        return () => tocbot.destroy();
    }, []);

    return (hasHeadings && (
        <div className={'border relative rounded-xl overflow-hidden'}>
            <div className={'px-3 pt-3 text-xl pb-2 font-bold'}>目录</div>
            <div className={'w-full max-h-[400px] overflow-y-auto'} id={'side-toc'}>
            </div>
        </div>
    ))
}

export default PostToc;
