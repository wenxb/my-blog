"use client"
import React, {useEffect} from "react";
import Valine from "valine";
import {usePathname} from "next/navigation";

const ValineCom = ({appId, appKey, ...props}) => {
    const path = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            new Valine({
                el: '#valine-comment',
                appId,
                appKey,
                path,
                ...props
            })
        }
    }, [])

    return (
        <>
            <div className={'text-2xl font-semibold mb-3'}>评论</div>
            <div id={'valine-comment'}></div>
        </>
    );
};

export default React.memo(ValineCom);
