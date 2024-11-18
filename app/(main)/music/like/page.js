"use client"
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import PlayListHeader from "@/components/page/music/PlayListHeader";
import PlayListBody from "@/components/page/music/PlayListBody";
import {playAllSongs} from "@/lib/musicPlayer";

const limit = 200
const Page = () => {
    const {data: detailData, isLoading: detailLoading} = useSWR(`/api/music/getLikeDetail`)
    const {
        data: songsData,
        isLoading: songsLoading,
        size,
        setSize,
    } = useSWRInfinite(index => `/api/music/getLikeSongs?offset=${index * limit}&limit=${limit}`)

    const songs = songsData ? [].concat(...songsData) : [];
    const isLoadingMore =
        songsLoading || (size > 0 && songsData && typeof songsData[size - 1] === "undefined");

    return (
        <MainColumn>
            <PageHeader>
                <PlayListHeader onPlayAll={()=>playAllSongs(songs)} loading={detailLoading} data={detailData}/>
            </PageHeader>
            <PlayListBody onLoadMore={() => setSize(size + 1)} isLoadingMore={isLoadingMore} songs={songs}
                          loading={songsLoading} count={detailData?.songsCount}/>
        </MainColumn>
    );
};

export default Page;
