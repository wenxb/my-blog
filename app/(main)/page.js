import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import useConfig from "@/lib/hook/useConfig";
import HeaderDesc from "@/components/page/home/HeaderDesc";
import PostList from "@/components/lists/PostList";
import {allPosts} from "contentlayer/generated";
import SideRightWrap from "@/components/sideRight/SideRightWrap";

export default async function Home() {
    const config = useConfig()
    const posts = allPosts.filter(p => !p?.draft).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    })
    const title = config.page.home.title ?? config.site.title

    return (
        <>
            <MainColumn>
                <PageHeader hideBar title={title}>
                    <HeaderDesc/>
                </PageHeader>
                <div>
                    <PostList data={posts}/>
                </div>
            </MainColumn>
            <SideRightWrap/>
        </>
    )
}
