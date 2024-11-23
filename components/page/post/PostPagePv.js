"use client"
import {useEffect, useRef} from "react";
import {formatCount} from "@/lib/utils";

const PostPagePv = () => {
    const numRef = useRef(null);

    useEffect(() => {

        const handleOnLoad = () => {
            const numEl = numRef.current
            const countPv = numEl.innerText || 0

            if (countPv) {
                numEl.innerHTML = formatCount(countPv)
            }
        }

        window.addEventListener('load', handleOnLoad);

        return () => {
            window.removeEventListener('load', handleOnLoad);
        };
    }, [])

    return (
        <span className={'ml-3'} id="busuanzi_container_page_pv">
            浏览量：<span ref={numRef} id="busuanzi_value_page_pv"></span>
        </span>
    );
};

export default PostPagePv;
