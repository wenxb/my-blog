import {createOption} from "@/lib/music/util";
import request from "@/lib/music/request";

export function user_account (params){
    return request(`/api/nuser/account/get`, {}, createOption(params, 'weapi'))
}

export function user_playlist(params) {
    const data = {
        uid: params.uid,
        limit: params.limit || 30,
        offset: params.offset || 0,
        includeVideo: true,
    }
    return request(`/api/user/playlist`, data, createOption(params, 'weapi'))
}