import {song_url_v1} from "@/lib/music/api/song";
import {JSEncrypt} from "jsencrypt";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')
    const privateKey = process.env.PRIVATE_KEY

    if(!privateKey) return Response.error()
    let obj = {}
    try {
        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey(privateKey);
        const result = decrypt.decrypt(atob(token));
        obj = JSON.parse(result || "")
    } catch (e) {
        return Response.error()
    }

    const {id, level} = obj

    if (!id) {
        return Response.error()
    }

    const res = await song_url_v1({
        id,
        level: level || "standard"
    })

    if (!res.body) return Response.error()

    return Response.json(res.body)
}
