import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import useConfig from "@/lib/hook/useConfig";
import HeaderDesc from "@/components/page/home/HeaderDesc";
import PostList from "@/components/lists/PostList";
import {allPosts} from "contentlayer/generated";
import SideRightWrap from "@/components/sideRight/SideRightWrap";
import PostPagination from "@/components/module/PostPagination";
import _ from "lodash";

const pageSize = 12
export default async function Home({searchParams}) {
    const page = parseInt(searchParams?.page || "1");

    const config = useConfig()
    const posts = allPosts.filter(p => !p?.draft).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    })
    const currentPosts = _.slice(posts, (page - 1) * pageSize, page * pageSize);
    const title = config.page.home.title ?? config.site.title

    return (
        <>
            <MainColumn>
                <PageHeader hideBar title={title}>
                    <HeaderDesc/>
                </PageHeader>
                <div>
                    <PostList data={currentPosts}/>
                    <PostPagination count={posts.length} pageSize={pageSize} page={page}/>
                </div>
            </MainColumn>
            <SideRightWrap/>
        </>
    )
}
