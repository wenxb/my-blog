import {createSlice} from "@reduxjs/toolkit";


const defaultPlaySongLyric = {
    // 是否具有普通翻译
    hasLrcTran: false,
    // 是否具有普通音译
    hasLrcRoma: false,
    // 是否具有逐字歌词
    hasYrc: false,
    // 是否具有逐字翻译
    hasYrcTran: false,
    // 是否具有逐字音译
    hasYrcRoma: false,
    // 上一首歌曲是否有歌词
    hasPrevLrc: false,
    // 普通歌词数组
    lrc: [],
    // 逐字歌词数据
    yrc: [],
}
const initialState = {
    // 当前播放列表
    playList: [],
    // 当前歌曲数据
    playSongData: {},
    playSongLyric: {
        ...defaultPlaySongLyric
    },
}

export const {
    actions: musicDataActions,
    reducer: musicDataReducer,
} = createSlice({
    name: 'musicData',
    initialState,
    reducers: {
        setPlayList: (state, action) => {
            state.playList = action.payload;
        },
        setPlaySongData: (state, action) => {
            state.playSongData = action.payload;
        },
        setPlaySongLyric: (state, action) => {
            state.playSongLyric = action.payload;
        },
        setDefaultPlaySongLyric: (state) => {
            state.playSongLyric = {...defaultPlaySongLyric}
        }
    }
})
