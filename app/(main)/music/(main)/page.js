"use client"
import PlayList, {PlayListItem, PlayListWrapper} from "@/components/lists/PlayList";
import SectionTitle from "@/components/module/SectionTitle";
import useSWR from "swr";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter();

    const {data: privateData, isLoading: privateLoading} = useSWR('/api/music/privateList');
    const {data: resourceData, isLoading: ResourceLoading} = useSWR('/api/music/resourceList');

    const handleClick = (type) => {
        if (type === 'daily') {
            router.push('/music/daily');
        } else if (type === 'radar') {
            router.push('/music/radar');
        }
    }

    return (
        <>
            <SectionTitle>私人歌单</SectionTitle>
            {privateData && (
                <PlayListWrapper>
                    {privateData.map((item, index) => (
                        <PlayListItem onClick={() => handleClick(item.type)} key={index} title={item.title}
                                      cover={item.cover}/>
                    ))}
                </PlayListWrapper>
            )}
            <SectionTitle>推荐歌单</SectionTitle>
            {privateData && <PlayList data={resourceData}/>}
        </>
    );
};

export default Page;
