import {Button} from "@/components/ui/button";
import LoadingBox from "@/components/common/LoadingBox";

const PlayListHeader = ({data, loading,onPlayAll}) => {
    return (loading ? (<LoadingBox className={'min-h-28'}/>) : (
            data && (
                <div className={'flex flex-grow w-full -mt-4'}>
                    <div className={'w-1/4 rounded-xl overflow-hidden border aspect-square'}>
                        <img className={'w-full h-full object-cover'} src={data?.cover} alt=""/>
                    </div>
                    <div className={'flex flex-col justify-between h-auto ml-4 flex-1'}>
                        <div className={'text-2xl font-semibold'}>{data?.title}</div>
                        <div className={'text-foreground/60 my-1 line-clamp-1'}
                             title={data.description}>{data.description}</div>
                        <p className={'text-foreground/50 text-sm'}>{`总共${data?.songsCount}首歌曲`}</p>
                        <div className={'mt-auto pt-2'}>
                            <Button onClick={onPlayAll} className={'rounded-full'}>播放全部</Button>
                        </div>
                    </div>
                </div>
            )
        )
    );
};

export default PlayListHeader;
