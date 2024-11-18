"use client"
import {useRouter} from "next/navigation";
import {PlayArrowFill} from "@/components/common/icons";
import {Button} from "@/components/ui/button";
import axios from "axios";
import {playAllSongs} from "@/lib/musicPlayer";

export const PlayListItem = ({onClick, cover, title, desc, id}) => {

    const handlePlayPlaylist = (e)=>{
        e.stopPropagation()

        if(!id) return;
        axios({
            method: "get",
            url: '/api/music/playlistSongs',
            params:{
                id,
                limit: 200,
                offset: 0,
            }
        }).then(res => {
            playAllSongs(res.data)
        });
    }

    return (
        <div onClick={onClick} className={'group flex px-4 items-center py-2.5 cursor-pointer hover:bg-accent'}>
            <div className={'flex flex-grow'}>
                <div className={'aspect-square w-12 border bg-accent rounded-lg overflow-hidden'}>
                    <img src={cover} alt={title} className={'w-full h-full pointer-events-none'}/>
                </div>
                <div className={'ml-2 flex flex-col justify-center'}>
                    <div className={'font-semibold line-clamp-1'}>{title}</div>
                    {desc && <div className={'text-gray-500 dark:text-foreground/60 line-clamp-1'}>{desc}</div>}
                </div>
            </div>
            {id && (
                <div className={'pr-4'}>
                    <Button onClick={handlePlayPlaylist} className={'opacity-0 hover:bg-blue-500/10 group-hover:opacity-100'} size={'icon'}
                            variant={'ghost'}>
                        <PlayArrowFill className={'text-blue-500 text-2xl'}/>
                    </Button>
                </div>
            )}
        </div>
    )
}

export const PlayListWrapper = ({children}) => {
    return (
        <div className={''}>
            {children}
        </div>
    )
}

const PlayList = ({data = []}) => {
    const router = useRouter()
    const handleItemClick = (id) => {
        if (!id) return;
        router.push(`/music/playlist/${id}`)
    }

    return (
        <PlayListWrapper>
            {
                data.map((item, i) => (
                    <PlayListItem id={item.id} title={item.title} desc={item?.desc} cover={item.cover}
                                  onClick={() => handleItemClick(item.id)}
                                  key={i}/>
                ))
            }
        </PlayListWrapper>
    );
};

export default PlayList;
