import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userData:{
        privateList: [],
        resourceList: [],
    },
    // 播放列表
    playList: [],
    // 当前歌曲数据
    playSongData: {},
    playSongLyric: {
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
    },
}

export const {
    actions: musicDataActions,
    reducer: musicDataReducer,
} = createSlice({
    name: 'musicData',
    initialState,
    reducers: {
        setPrivateList: (state, action) => {
            state.userData.privateList = action.payload;
        },
        setResourceList: (state, action) => {
            state.userData.resourceList = action.payload;
        }
    }
})
