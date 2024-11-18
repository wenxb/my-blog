"use client"
import PlayList, {PlayListItem, PlayListWrapper} from "@/components/lists/PlayList";
import SectionTitle from "@/components/module/SectionTitle";
import useSWR from "swr";
import {useRouter} from "next/navigation";
import LoadingBox from "@/components/common/LoadingBox";
import {Button} from "@/components/ui/button";
import {RefreshCcwIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useCallback} from "react";
import {debounce} from "lodash";

const Page = () => {
    const router = useRouter();

    const {data: privateData, isLoading: privateLoading} = useSWR('/api/music/privateList');
    const {data: resourceData, isLoading: resourceLoading, mutate} = useSWR('/api/music/resourceList');

    const handleClick = (type) => {
        if (type === 'daily') {
            router.push('/music/daily');
        } else if (type === 'radar') {
            router.push('/music/radar');
        }
    }

    const updateResourceDe = useCallback(debounce(()=>mutate(), 300), [])

    const handleRefresh = () => {
        updateResourceDe()
    }

    return (
        <>
            <SectionTitle>私人歌单</SectionTitle>
            {privateLoading ? (<LoadingBox className={'min-h-28'}/>) : (privateData && (
                <PlayListWrapper>
                    {privateData.map((item, index) => (
                        <PlayListItem id={item?.id} onClick={() => handleClick(item.type)} key={index} desc={item?.desc}
                                      title={item.title}
                                      cover={item.cover}/>
                    ))}
                </PlayListWrapper>
            ))}
            <div className={'flex w-full justify-between items-center px-4 my-3'}>
                <div className={'text-xl font-bold'}>
                    推荐歌单
                </div>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={handleRefresh} variant={'ghost'} size={'icon'}>
                            <RefreshCcwIcon className={'text-foreground/60'}/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>刷新推荐</TooltipContent>
                </Tooltip>
            </div>
            {resourceLoading ? (<LoadingBox className={'min-h-28'}/>) : (privateData &&
                <PlayList data={resourceData}/>)}
        </>
    );
};

export default Page;
