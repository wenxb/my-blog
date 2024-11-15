const resizeCoverUrl = (url, size = null) => {
    try {
        if (!url) return "/img/music/song.jpg";
        const sizeUrl = size
            ? typeof size === "number"
                ? `?param=${size}y${size}`
                : `?param=${size}`
            : "";
        const imageUrl = url?.replace(/^http:/, "https:");
        if (imageUrl.endsWith(".jpg")) {
            return imageUrl + sizeUrl;
        }
        if (imageUrl.endsWith("&")) {
            const url = imageUrl + "cl";
            return url.replace(/(thumbnail=[0-9]+y[0-9]+&cl)/, `thumbnail=${size}y${size}&`);
        }
        return imageUrl;
    } catch (error) {
        console.error("图片链接处理出错：", error);
        return "/img/music/song.jpg";
    }
};

export function getCoverUrl(item) {
    const imgUrl =
        item &&
        (item.picUrl ||
            item.coverUrl ||
            item.coverImgUrl ||
            item.imgurl ||
            item.cover ||
            (item.album && item.album.picUrl) ||
            (item.al && (item.al.picUrl || item.al.xInfo?.picUrl)));

    return resizeCoverUrl(imgUrl, 300);
}

export const createOption = (query, crypto = '') => {
    return {
        crypto: query?.crypto || crypto || '',
        cookie: query?.cookie,
        ua: query?.ua || '',
        proxy: query?.proxy,
        realIP: query?.realIP,
        e_r: query?.e_r || undefined,
    }
}
