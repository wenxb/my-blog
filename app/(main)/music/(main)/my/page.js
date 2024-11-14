'use client'
import PlayList from "@/components/lists/PlayList";
import SectionTitle from "@/components/module/SectionTitle";

const Page = () => {
    return (
        <div className={'py-2'}>
            <SectionTitle>音乐库</SectionTitle>
            <PlayList/>
            <SectionTitle>创建的歌单</SectionTitle>
            <PlayList/>
            <SectionTitle>收藏的歌单</SectionTitle>
            <PlayList/>
        </div>
    );
};

export default Page;
