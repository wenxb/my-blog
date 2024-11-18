"use client";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {LyricPlayer} from "@applemusic-like-lyrics/react"
import {cloneDeep} from "lodash"
import "./SideLyric.scss"

const SideLyric = () => {
    const playSongId = useSelector(state => state.musicData.playSongData?.id)
    const playSongLyric = useSelector(state => state.musicData.playSongLyric)
    const [lyricLines, setLyricLines] = useState([]);
    const isPlaying = useSelector(state => state.musicState.isPlaying)
    const currentTime = useSelector(state => state.musicState.currentTime)

    useEffect(() => {
        const lyrics = playSongLyric.hasYrc ? playSongLyric.yrc : playSongLyric.lrc
        if (lyrics.length) {
            setLyricLines(cloneDeep(lyrics))
        }
    }, [playSongId, playSongLyric])


    return (lyricLines.length ? (
            <div
                style={{
                    "--amll-lyric-player-font-size": '1.4em',
                }}
                className={'relative max-w-full w-full h-[350px] rounded-xl overflow-hidden border mt-4'}
            >
                <LyricPlayer className={"absolute inset-0 w-full h-full overflow-hidden"} style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    contain: "paint layout",
                    mixBlendMode: "plus-lighter",
                }} playing={isPlaying} currentTime={Math.round(currentTime)} enableSpring={false} enableScale={false}
                             lyricLines={lyricLines} alignAnchor="center"/>
            </div>
        ) : null
    );
};

export default SideLyric;
