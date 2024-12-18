'use client'
import PlayList, {PlayListItem, PlayListWrapper} from "@/components/lists/PlayList";
import SectionTitle from "@/components/module/SectionTitle";
import useSWR from "swr";
import {useRouter} from "next/navigation";
import LoadingBox from "@/components/common/LoadingBox";

const Page = () => {
    const router = useRouter();
    const {data: pageData, isLoading} = useSWR('/api/music/myPlaylist')

    return (
        <>
            {isLoading ? (<LoadingBox className={'min-h-28'}/>) : (
                <>
                    <SectionTitle>我的歌单</SectionTitle>
                    {pageData?.like && (
                        <PlayListWrapper>
                            <PlayListItem cover={pageData.like.cover} title={pageData.like.title}
                                          onClick={() => router.push("/music/like")}/>
                            <PlayListItem
                                cover={"https://p1.music.126.net/jWE3OEZUlwdz0ARvyQ9wWw==/109951165474121408.jpg?param=300y300"}
                                title={"我的云盘"}
                                onClick={() => router.push("/music/cloud")}/>
                        </PlayListWrapper>
                    )}
                    {(pageData?.create && pageData?.create?.length) && (
                        <>
                            <SectionTitle>创建的歌单</SectionTitle>
                            <PlayList data={pageData?.create}/>
                        </>
                    )}
                    {(pageData?.favorite && pageData?.favorite?.length) && (
                        <>
                            <SectionTitle>收藏的歌单</SectionTitle>
                            <PlayList data={pageData?.favorite}/>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Page;
