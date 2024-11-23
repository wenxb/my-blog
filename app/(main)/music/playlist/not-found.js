import Link from "next/link";
import MainColumn from "@/components/module/MainColumn";

export default function NotFound() {
    return (
        <MainColumn>
            <div className={'flex w-full flex-col px-4 relative top-[15%] justify-center items-center'}>
                <div className={'flex flex-col h-full justify-center items-start'}>
                    <h2 className={'text-2xl'}>出现了错误</h2>
                    <p className={'py-4'}>无法找到播放列表</p>
                    <Link href="/music" className={'border-b border-blue-500'}>返回音乐</Link>
                </div>
            </div>
        </MainColumn>
    );
}
