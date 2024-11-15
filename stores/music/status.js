import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentPlayListId: null,
    isPlaying: false,
    isLoading: false,
    // 实时播放进度
    playSeek: 0,
    currentTime: 0,
    // 播放时长数据
    playTimeData: {
        currentTime: 0,
        duration: 0,
        bar: 0,
        played: "00:00",
        durationTime: "00:00",
    },
    // 默认音量
    playVolume: 0.7,
    // 静音前音量
    playVolumeMute: 0,
    // 当前播放索引
    playIndex: 0,
    // normal 顺序播放 / random 随机播放 / repeat 单曲循环
    playSongMode: "normal",
}

export const {
    actions: musicStateActions,
    reducer: musicStateReducer,
} = createSlice({
    name: 'musicState',
    initialState,
    reducers: {

    }
})
