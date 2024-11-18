"use client";
import {Slider} from "@/components/ui/slider";
import {Button} from "@/components/ui/button";
import {
    LyricsLine,
    PauseFill,
    PlayArrowFill,
    SkipNextFill,
    SkipPreviousFill,
    VolumeDownFill,
    VolumeUpFill
} from "@/components/common/icons";
import {useDispatch, useSelector} from "react-redux";
import {changePlayIndex, playOrPause, setPlayed, setSeek, setVolume} from "@/lib/musicPlayer";
import {useCallback, useEffect, useRef, useState} from "react";
import {debounce} from "lodash"
import {RepeatIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {musicStateActions} from "@/stores/music/status";
import LoadingBox from "@/components/common/LoadingBox";

const MusicControl = () => {
    const dispatch = useDispatch();
    const playSong = useSelector(state => state.musicData.playSongData)
    const musicState = useSelector(state => state.musicState)
    const [sliderValue, setSliderValue] = useState([0])
    const canSliderRef = useRef(true);
    const isPlaying = useSelector(state => state.musicState.isPlaying)
    const isLoading = useSelector(state => state.musicState.isLoading)


    useEffect(() => {
        if (canSliderRef.current && musicState.playTimeData?.bar) {
            setSliderValue([musicState.playTimeData?.bar])
        }
    }, [musicState.playTimeData?.bar])

    // 更新进度条
    const songTimeSliderUpdate = (val) => {
        if (musicState.playTimeData?.duration) {
            const currentTime = (musicState.playTimeData.duration / 100) * (val[0]);
            setPlayed(currentTime)
            setSeek(currentTime);
        }
    };


    const changePlayIndexDebounce = useCallback(
        debounce(async (type) => {
            await changePlayIndex(type, true);
        }, 300),
        []
    );

    const handleChangePlayIndex = (type) => {
        changePlayIndexDebounce(type)
    }

    return (
        playSong?.id && (
            <div className={'relative border w-full rounded-2xl overflow-hidden p-4'}>
                <LoadingBox className={cn(
                    'z-[5] absolute inset-0 bg-background opacity-100 invisible pointer-events-none',
                    isLoading && 'opacity-100 visible pointer-events-auto'
                )}/>
                <div className={'w-full relative z-[1]'}>
                    <div className={'flex items-center'}>
                        <div className={'min-w-14 w-14 h-14 rounded-full border-2 overflow-hidden select-none'}>
                            <img className={'w-full h-full object-cover pointer-events-none'}
                                 src={playSong?.cover}
                                 alt=""/>
                        </div>
                        <div className={'ml-2.5'}>
                            <div className={'font-semibold text-lg line-clamp-1'}>{playSong.name}</div>
                            {playSong.avatar && (
                                <div className={'text-gray-500 line-clamp-1'}>
                                    {playSong.avatar.map((avatar, i) => (
                                        <span key={avatar.id || i}
                                              className={"not-last-child:after:content-['/'] not-last-child:after:mx-1"}>{avatar.name}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={'mt-3'}>
                        <Slider onPointerDown={() => canSliderRef.current = false}
                                onPointerUp={() => canSliderRef.current = true}
                                onValueChange={value => setSliderValue(value)}
                                onValueCommit={songTimeSliderUpdate}
                                value={sliderValue} min={0} max={100} step={0.1}/>

                        <div
                            className={'flex items-center justify-between w-full text-xs select-none text-neutral-400 mt-1 min-h-4'}>
                            <span>{musicState.playTimeData?.played}</span>
                            <span>{musicState.playTimeData?.durationTime}</span>
                        </div>
                    </div>
                    <div className={'flex justify-around items-center gap-2 -mt-1'}>
                        <div>
                            <RepeatIcon/>
                        </div>
                        <div className={'flex items-center'}>
                            <Button onClick={() => handleChangePlayIndex('prev')}
                                    className={'w-11 h-11 text-3xl'}
                                    size={'icon'} variant={'ghost'}>
                                <SkipPreviousFill/>
                            </Button>
                            <Button onClick={playOrPause} className={'w-14 h-14 text-5xl'} size={'icon'}
                                    variant={'ghost'}>
                                {isPlaying ? <PauseFill/> : <PlayArrowFill/>}
                            </Button>
                            <Button onClick={() => handleChangePlayIndex('next')}
                                    className={'w-11 h-11 text-3xl'}
                                    size={'icon'} variant={'ghost'}>
                                <SkipNextFill/>
                            </Button>
                        </div>
                        <div>
                            <LyricsLine
                                onClick={() => dispatch(musicStateActions.setShowYrlics(!musicState.showYrlics))}
                                className={cn(
                                    'text-lg cursor-pointer',
                                    musicState.showYrlics && 'text-blue-500'
                                )}/>
                        </div>
                    </div>
                    <div className={'flex items-center w-full mt-3 justify-between'}>
                            <span className={'text-2xl text-gray-500'}>
                    <VolumeDownFill/>
                </span>
                        <div className={'mx-3 flex-grow'}>
                            <Slider value={[musicState.playVolume]} onValueChange={value => setVolume(value[0])}
                                    max={1}
                                    min={0} step={0.01}/>
                        </div>
                        <span className={'text-2xl text-gray-500'}>
                    <VolumeUpFill/>
                </span>
                    </div>
                </div>
            </div>
        )
    );
};

export default MusicControl;
