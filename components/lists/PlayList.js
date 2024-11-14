"use client"
import {useRouter} from "next/navigation";

const PlayItem = ({onClick})=> {
    return (
        <div onClick={onClick} className={'flex flex-col cursor-pointer'}>
            <div className={'aspect-square bg-gray-100 rounded-2xl overflow-hidden'}>
                <img src={'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'} alt={''} className={'w-full h-full pointer-events-none'}/>
            </div>
            <div className={'px-1 pt-1'}>歌单名称</div>
        </div>
    )
}

const PlayList = () => {
    const router = useRouter()
    const handleItemClick = (id) => {
        router.push(`/music/playlist/${id}`)
    }

    return (
        <div className={'grid grid-cols-4 gap-4 px-4'}>
            {
                Array(5).fill(0).map((_, i) => (
                    <PlayItem onClick={()=>handleItemClick(1)} key={i}/>
                ))
            }
        </div>
    );
};

export default PlayList;
