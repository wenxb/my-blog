import {allPages} from "contentlayer/generated";
import {notFound} from "next/navigation";
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import useConfig from "@/lib/hook/useConfig";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {SiBilibili, SiFacebook, SiGithub, SiX} from "@icons-pack/react-simple-icons";
import {LinkIcon, MailIcon} from "lucide-react";

const Page = () => {
    const config = useConfig();
    const page = allPages.find(p => p._raw.flattenedPath === 'page/about')
    const social = config.author?.social || {}

    if (!page) {
        notFound()
    }

    const socialIcons = Object.keys(social).map((key, index) => {
        let icon
        switch (key) {
            case 'github':
                icon = <SiGithub/>
                break;
            case 'facebook':
                icon = <SiFacebook/>
                break;
            case 'twitter':
                icon = <SiX/>
                break;
            case 'mail':
                icon = <MailIcon/>
                break;
            case 'bilibili':
                icon = <SiBilibili/>
                break;
            default:
                icon = <LinkIcon/>
        }
        return (
            <Button className={'w-10 h-10 text-xl'} key={index} asChild variant={'ghost'}
                    size={'icon'}>
                <Link href={social[key]} target={'_blank'}>
                    {icon}
                </Link>
            </Button>
        )
    })

    return (
        <MainColumn>
            <PageHeader hideBar>
                <div className={'flex-1 w-full'}>
                    <div>
                        <div className={'relative rounded-full overflow-hidden w-1/5 min-w-12'}>
                            <div className={'pb-[100%]'}></div>
                            <div className={'absolute inset-0 w-full h-full bg-accent'}>
                                <img className={'w-full h-full'} src={config.author.avatar || '/img/default-avatar.jpg'}
                                     alt="about me"/>
                            </div>
                        </div>
                        <div className={'mt-4'}>
                            <div className={'text-3xl font-semibold'}>{config.author.name || 'About me'}</div>
                        </div>
                    </div>
                    <div className={'mt-4 -mx-2'}>
                        <div className={'flex items-center'}>
                            {socialIcons}
                        </div>
                    </div>
                </div>
            </PageHeader>
            <article className={'prose max-w-full prose-blue p-6 dark:prose-invert'}>
                <MarkdownRenderer md={page.body.raw}/>
            </article>
        </MainColumn>
    );
};

export default Page;
