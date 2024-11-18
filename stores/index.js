import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {musicDataReducer} from "@/stores/music/data";
import {musicStateReducer} from "@/stores/music/status";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import createFilter from "redux-persist-transform-filter";

const rootReducer = combineReducers({
    musicData: musicDataReducer,
    musicState: musicStateReducer,
});

const musicStateFilter = createFilter(
    'musicState',
    ['playVolume', 'playSongMode', 'showYrlics'] // 持久化字段
);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['musicState'],
    transforms: [musicStateFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false, // 禁用序列化检查，以支持 redux-persist 的非序列化值
        })
    },
})

export const persistor = persistStore(store);
