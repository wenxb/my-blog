import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import {allYmls} from 'contentlayer/generated'
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";

const Page = () => {
    const tools = allYmls.filter(t => t._raw.flattenedPath === 'data/tools')

    return (
        <MainColumn>
            <PageHeader hideBar title={'工具'}></PageHeader>

            <div className={'p-6 pt-2'}>
                {
                    tools[0].data.map(group => (
                        <div key={group.key}>
                            <div className={'text-xl font-semibold my-4'}>{group.title}</div>
                            <ul className={'grid grid-cols-2 gap-6'}>
                                {
                                    group.tools.map(tool => (
                                        <li key={tool.path}>
                                            <Link href={`/tools/${group.key}/${tool.path}`}
                                                  className={'flex py-2 border-b-2 hover:border-blue-500'}>
                                                <Avatar className={'rounded-lg border w-11 h-11'}>
                                                    <AvatarImage src={tool.icon} alt=""/>
                                                </Avatar>
                                                <div className={'ml-2'}>
                                                    <div>{tool.name}</div>
                                                    <div className={'text-xs mt-0.5 text-neutral-400'}>{tool.desc}</div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </MainColumn>
    );
};

export default Page;
