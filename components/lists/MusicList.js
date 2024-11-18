'use client'
import {MusicNoteFill, PlayArrowFill} from "@/components/common/icons";
import {playSong} from "@/lib/musicPlayer";
import {cn} from "@/lib/utils";
import {useSelector} from "react-redux";
import {debounce} from "lodash";
import {useCallback} from "react";

const MusicItem = ({item, num, onClick, isPlayActive}) => {
    return (
        <div onClick={() => onClick(item.id)}
             className={'flex items-center group px-4 py-3 cursor-pointer transition-colors hover:bg-accent'}>
            <div className={'min-w-10'}>
                <span className={cn(
                    'text-foreground/60 pl-1.5 group-hover:hidden',
                    isPlayActive && 'hidden'
                )}>{num + 1}</span>
                <span className={cn(
                    'group-hover:flex hidden -ml-1',
                    isPlayActive && 'flex'
                )}>
                    {isPlayActive ? <MusicNoteFill className={'animate-bounce text-blue-500 text-2xl ml-0.5 mt-1.5'}/> :
                        <PlayArrowFill className={cn(
                            'text-blue-500 text-3xl',
                        )}/>
                    }
                </span>
            </div>
            <div className={'flex flex-1'}>
                <div className={'w-10 h-10 min-w-10 rounded-md overflow-hidden bg-accent'}>
                    <img className={'w-full h-full object-cover pointer-events-none'}
                         src={item.cover}
                         alt=""/>
                </div>
                <div className={'ml-3 flex flex-col justify-center'}>
                    <div className={'line-clamp-1'}>{item.name}</div>
                    {item.avatar && (
                        <div className={'text-sm text-foreground/60 line-clamp-1'}>
                            {item.avatar.map((avatar, i) => (
                                <span key={avatar.id || i}
                                      className={"not-last-child:after:content-['/'] not-last-child:after:mx-1"}>{avatar.name}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={'text-foreground/50 text-[14px] flex-1 line-clamp-1 mx-2'}>{item.album.name}</div>
            <div className={'text-foreground/50 text-[14px] min-w-10 text-center'}>{item.duration}</div>
        </div>
    )
}

const MusicList = ({data = []}) => {
    const currentPlaySong = useSelector(state => state.musicData.playSongData)

    const playSongDe = useCallback(
        debounce((id) => playSong(data, id), 100),
        [])

    const handleItemClick = (id) => {
        playSongDe(id)
    }

    return (
        <div>
            {data.map((item, i) => (
                <MusicItem onClick={handleItemClick} isPlayActive={currentPlaySong?.id === item.id} item={item}
                           key={item.id} num={i}/>
            ))}
        </div>
    );
};

export default MusicList;
