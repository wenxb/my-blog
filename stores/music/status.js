import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showYrlics: true,
    isPlaying: false,
    isLoading: false,
    // 实时播放进度
    playSeek: 0,
    currentTime: 0,
    // 是否下一首
    hasNextSong: false,
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
    // 当前播放索引
    playIndex: 0,
    text: 12,
    // normal 顺序播放 / random 随机播放 / repeat 单曲循环
    playSongMode: "normal",
}

export const {
    actions: musicStateActions,
    reducer: musicStateReducer,
} = createSlice({
    name: 'musicState',
    initialState: {...initialState},
    reducers: {
        setShowYrlics: (state, action) => {
            state.showYrlics = action.payload;
        },
        setPlaySongMode: (state, action) => {
            state.playSongMode = action.payload;
        },
        setPlayVolume: (state, action) => {
            state.playVolume = action.payload;
        },
        setHasNextSong: (state, action) => {
            state.hasNextSong = action.payload;
        },
        setPlayIndex: (state, action) => {
            state.playIndex = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setPlaySeek: (state, action) => {
            state.playSeek = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setPlayTimeData: (state, action) => {
            state.playTimeData = action.payload;
        }
    }
})
