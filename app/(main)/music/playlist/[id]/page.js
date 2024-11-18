"use client"
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import PlayListHeader from "@/components/page/music/PlayListHeader";
import PlayListBody from "@/components/page/music/PlayListBody";
import {playAllSongs} from "@/lib/musicPlayer";
import {notFound} from "next/navigation";

const limit = 200
const Page = ({params}) => {
    const {id} = params;
    const {data: detailData, isLoading: detailLoading} = useSWR(`/api/music/playlistDetail?id=${id}`)
    const {
        data: songsData,
        isLoading: songsLoading,
        size,
        setSize,
        error
    } = useSWRInfinite(index => `/api/music/playlistSongs?id=${id}&offset=${index * limit}&limit=${limit}`)

    if(error) {
        notFound()
    }

    const songs = songsData ? [].concat(...songsData) : [];
    const isLoadingMore =
        songsLoading || (size > 0 && songsData && typeof songsData[size - 1] === "undefined");

    return (
        <MainColumn>
            <PageHeader>
                <PlayListHeader onPlayAll={() => playAllSongs(songs)} loading={detailLoading} data={detailData}/>
            </PageHeader>
            <PlayListBody onLoadMore={() => setSize(size + 1)} isLoadingMore={isLoadingMore} songs={songs}
                          loading={songsLoading} count={detailData?.songsCount}/>
        </MainColumn>
    );
};

export default Page;
