import {Howl, Howler} from "howler";


let player;


export const initPlayer = (playNow = false) => {
    if (player) soundStop()


    const src = ""

    // 初始化播放器
    player = new Howl({
        src: [src],
        format: ["mp3", "flac", "dolby", "webm"],
        html5: true,
        preload: "metadata",
        volume: status.playVolume,
        rate: status.playRate,
    });

    // 允许跨域
    const audioDom = player._sounds[0]._node;
    audioDom.crossOrigin = "anonymous";


}

/**
 * 停止播放器
 */
export const soundStop = () => {
    Howler.unload();
    player?.unload()
};
