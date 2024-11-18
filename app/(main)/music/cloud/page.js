"use client"
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import PlayListHeader from "@/components/page/music/PlayListHeader";
import useSWR from "swr";
import PlayListBody from "@/components/page/music/PlayListBody";
import {playAllSongs} from "@/lib/musicPlayer";

const Page = () => {
    const {data, isLoading} = useSWR('/api/music/getCloud');

    return (
        <MainColumn>
            <PageHeader>
                <PlayListHeader onPlayAll={()=>playAllSongs(data?.songs)} loading={isLoading} data={data}/>
            </PageHeader>
            <PlayListBody songs={data?.songs} count={data?.songsCount} loading={isLoading}/>
        </MainColumn>
    );
};

export default Page;
