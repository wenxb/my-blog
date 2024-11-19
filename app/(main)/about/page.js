import {allPages} from "contentlayer/generated";
import {notFound} from "next/navigation";
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";

const Page = () => {
    const page = allPages.find(p => p._raw.flattenedPath === 'page/about')

    if (!page) {
        notFound()
    }

    return (
        <MainColumn>
            <PageHeader hideBar title={page.title} secondary={page?.desc}></PageHeader>
            <article className={'prose max-w-full prose-blue p-6 dark:prose-invert'}>
                <MarkdownRenderer md={page.body.raw}/>
            </article>
        </MainColumn>
    );
};

export default Page;
