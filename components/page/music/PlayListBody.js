import LoadingBox from "@/components/common/LoadingBox";
import MusicList from "@/components/lists/MusicList";
import {Button} from "@/components/ui/button";

const PlayListBody = ({loading, songs, count, isLoadingMore,onLoadMore}) => {
    return (
        <div className={'pb-10'}>
            {!songs || loading ? (<LoadingBox className={'min-h-28'}/>) : (songs && (<MusicList data={songs}/>))}
            <div className={'flex justify-center mt-6'}>
                {(songs?.length < count && !loading) && (
                    <Button disabled={isLoadingMore}
                            onClick={onLoadMore}>{isLoadingMore ? '加载中...' : '加载更多'}</Button>
                )}
            </div>
        </div>
    );
};

export default PlayListBody;
