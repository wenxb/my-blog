'use client'

import {PlayIcon} from "lucide-react";

const MusicItem = ({index}) => {
    return (
        <div className={'flex items-center group px-4 py-3 cursor-pointer transition-colors hover:bg-gray-100'}>
            <div className={'min-w-10'}>
                <span className={'text-gray-500 pl-2 group-hover:hidden'}>{index + 1}</span>
                <span className={'group-hover:flex pl-1 hidden'}>
                    <PlayIcon className={'fill-blue-500 text-[22px] stroke-0'}/>
                </span>
            </div>
            <div className={'flex flex-1'}>
                <div className={'w-10 h-10 rounded-md overflow-hidden bg-gray-100'}>
                    <img className={'w-full h-full object-cover pointer-events-none'} src="https://p1.music.126.net/Bb50pyrAJzR3ZsjxILnO6A==/109951169278248355.jpg?param=100y100" alt=""/>
                </div>
                <div className={'ml-3'}>
                    <div>歌曲名</div>
                    <div className={'text-sm text-gray-500'}>歌手</div>
                </div>
            </div>
            <div className={'text-neutral-400 text-[14px] flex-1'}>专辑</div>
            <div className={'text-neutral-400 text-[14px] min-w-10 text-center'}>3:20</div>
        </div>
    )
}

const MusicList = () => {
    return (
        <div>
            {Array(5).fill(0).map((_, i) => (
                <MusicItem key={i} index={i}/>
            ))}
        </div>
    );
};

export default MusicList;
