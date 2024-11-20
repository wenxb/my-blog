import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import {allYmls} from 'contentlayer/generated'
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import useConfig from "@/lib/hook/useConfig";
import {notFound} from "next/navigation";

const ToolItem = ({tool, parentPath}) => {
    return (
        <li>
            <Link href={`/tools/${parentPath}/${tool.path}`}
                  className={'flex p-2 rounded-2xl hover:bg-accent'}>
                <Avatar className={'rounded-xl border w-12 h-12 bg-background dark:bg-foreground'}>
                    <AvatarImage src={tool.icon} alt=""/>
                </Avatar>
                <div className={'ml-2'}>
                    <div className={'font-semibold'}>{tool.name}</div>
                    <div className={'text-xs mt-1 text-neutral-400 line-clamp-1'}>{tool.desc}</div>
                </div>
            </Link>
        </li>
    )
}

export const metadata = {
    title: '工具'
}

const Page = () => {
    const tools = allYmls.filter(t => t._raw.flattenedPath === 'data/tools')
    const config = useConfig();

    if (!config.page.tools.enable) {
        notFound()
    }

    return (
        <MainColumn>
            <PageHeader hideBar title={'工具'}></PageHeader>

            <div className={'p-6 pt-2'}>
                {
                    tools[0].data.map(group => (
                        <div key={group.key}>
                            <div className={'text-xl font-semibold mt-6 mb-4'}>{group.title}</div>
                            <ul className={'grid grid-cols-2 gap-4 -mx-2'}>
                                {
                                    group.tools.map(tool => (
                                        <ToolItem parentPath={group.key} key={tool.path} tool={tool}/>
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
