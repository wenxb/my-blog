import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import MusicList from "@/components/lists/MusicList";
import {Button} from "@/components/ui/button";
import {PlayIcon} from "lucide-react";

const Page = () => {
    return (
        <MainColumn>
            <PageHeader>
                <div className={'flex flex-grow w-full justify-start items-center -mt-4'}>
                    <div className={'w-1/4 rounded-xl overflow-hidden border aspect-square'}>
                        <img className={'w-full h-full object-cover'} src="https://p1.music.126.net/Bb50pyrAJzR3ZsjxILnO6A==/109951169278248355.jpg?param=100y100" alt=""/>
                    </div>
                    <div className={'flex flex-col justify-between h-full ml-4 flex-1'}>
                        <div className={'text-2xl font-semibold'}>歌单名称</div>
                        <div className={'text-gray-500 my-1'}>歌单介绍</div>
                        <p className={'text-neutral-400 text-sm'}>歌曲数：32</p>
                        <div className={'mt-6'}>
                            <Button className={'rounded-full'}><PlayIcon className={'fill-white text-lg stroke-0'}/>播放全部</Button>
                        </div>
                    </div>
                </div>
            </PageHeader>
            <MusicList/>
        </MainColumn>
    );
};

export default Page;
