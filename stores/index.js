import {configureStore} from "@reduxjs/toolkit";
import {musicDataReducer} from "@/stores/music/data";
import {musicStateReducer} from "@/stores/music/status";

export const store = configureStore({
    reducer: {
        musicData: musicDataReducer,
        musicState: musicStateReducer,
    }
})
