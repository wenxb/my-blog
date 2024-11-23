"use client"
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";

const Twikoo = ({envId, lang, region}) => {
    const path = usePathname()

    useEffect(() => {
        const scriptElement = document.createElement('script')
        scriptElement.src = 'https://registry.npmmirror.com/twikoo/1.6.40/files/dist/twikoo.all.min.js'
        scriptElement.async = true
        scriptElement.onload = () => {
            window.twikoo?.init({
                envId,
                el: `#twikoo-comment`,
                lang,
                region,
                path,
            });
        };

        document.body.appendChild(scriptElement)
        return () => {
            document.body.removeChild(scriptElement)
        }
    }, [])

    return (
        <>
            <div className={'text-2xl font-semibold mb-3'}>评论</div>
            <div id={'twikoo-comment'}></div>
        </>
    );
};

export default React.memo(Twikoo);
