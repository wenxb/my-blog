"use client"
import {useRouter} from "next/navigation";

export const PlayListItem = ({onClick, cover, title}) => {
    return (
        <div onClick={onClick} className={'flex flex-col cursor-pointer'}>
            <div className={'aspect-square border bg-gray-100 rounded-xl overflow-hidden'}>
                <img src={cover} alt={title} className={'w-full h-full pointer-events-none'}/>
            </div>
            <div className={'px-1 pt-1'}>{title}</div>
        </div>
    )
}

export const PlayListWrapper = ({children}) => {
    return (
        <div className={'grid grid-cols-4 gap-4 px-4'}>
            {children}
        </div>
    )
}

const PlayList = ({data = []}) => {
    const router = useRouter()
    const handleItemClick = (id) => {
        if (!id) return;
        router.push(`/music/playlist/${id}`)
    }

    return (
        <PlayListWrapper>
            {
                data.map((item, i) => (
                    <PlayListItem title={item.title} cover={item.cover} onClick={() => handleItemClick(item.id)}
                                  key={i}/>
                ))
            }
        </PlayListWrapper>
    );
};

export default PlayList;
