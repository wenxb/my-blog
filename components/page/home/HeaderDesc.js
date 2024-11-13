import React from 'react';
import useConfig from "@/lib/hook/useConfig";
import TypicalText from "@/components/common/TypicalText";

const HeaderDesc = async () => {
    const config = useConfig()

    const homeDesc = config.page.home.desc
    let text
    if (homeDesc.type === 'api') {
        try {
            const json = await fetch(config.page.home.desc.api, {
                next: {
                    revalidate: 3600
                }
            }).then((res) => res.json())
            if (json?.hitokoto) {
                text = json.hitokoto
            }
            if (json?.from) {
                text += ' - ' + json.from
            }
            if (json?.from_who) {
                text += ' · ' + json.from_who
            }
        } catch (e) {
            text = null
            console.log(e)
        }
    }
    return (
        <>
            {(homeDesc.type === 'api' && text) && (
                <p className={'mt-2 text-gray-500'}>{text}</p>
            )}
            {homeDesc.type === 'text' && (
                <TypicalText className={'mt-2'} text={homeDesc.text}/>
            )}
        </>
    );
};

export default HeaderDesc;
