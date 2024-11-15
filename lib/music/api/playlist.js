import request from "@/lib/music/request";
import {createOption} from "@/lib/music/util";

export const playlist_detail = (query) => {
    const data = {
        id: query.id,
        n: 100000,
        s: query.s || 8,
    }
    return request(`/api/v6/playlist/detail`, data, createOption(query))
}
