"use client"

import {Slider} from "@/components/ui/slider";
import {Button} from "@/components/ui/button";
import {PlayArrowFill, SkipNextFill, SkipPreviousFill, VolumeDownFill, VolumeUpFill} from "@/components/common/icons";

const MusicControl = () => {
    return (
        <div className={'border w-full rounded-2xl p-4'}>
            <div className={'flex items-center'}>
                <div className={'w-[62px] h-[62px] rounded-full border-2 overflow-hidden select-none'}>
                    <img className={'w-full h-full object-cover pointer-events-none'} src="https://p1.music.126.net/Bb50pyrAJzR3ZsjxILnO6A==/109951169278248355.jpg?param=100y100" alt=""/>
                </div>
                <div className={'ml-3'}>
                    <div className={'font-semibold text-lg line-clamp-2'}>歌曲名</div>
                    <div className={'line-clamp-1 text-gray-500'}>歌手</div>
                </div>
            </div>
            <div className={'mt-3'}>
                <Slider defaultValue={[500]} max={1000} step={1}/>
                <div className={'flex items-center justify-between w-full text-xs select-none text-neutral-400 mt-1'}>
                    <span>0:32</span>
                    <span>3:22</span>
                </div>
            </div>
            <div className={'flex justify-center items-center gap-2 -mt-1'}>
                <Button className={'w-11 h-11 text-3xl'} size={'icon'} variant={'ghost'}>
                    <SkipPreviousFill/>
                </Button>
                <Button className={'w-14 h-14 text-5xl'} size={'icon'} variant={'ghost'}>
                    <PlayArrowFill/>
                </Button>
                <Button className={'w-11 h-11 text-3xl'} size={'icon'} variant={'ghost'}>
                    <SkipNextFill/>
                </Button>
            </div>
            <div className={'flex items-center w-full mt-2 justify-between'}>
                <span className={'text-2xl text-gray-500'}>
                    <VolumeDownFill/>
                </span>
                <div className={'mx-3 flex-grow'}>
                    <Slider defaultValue={[500]} max={1000} step={1}/>
                </div>
                <span className={'text-2xl text-gray-500'}>
                    <VolumeUpFill/>
                </span>
            </div>
        </div>
    );
};

export default MusicControl;
