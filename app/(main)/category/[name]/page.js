import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import {allPosts} from "contentlayer/generated";
import PostList from "@/components/lists/PostList";
import _ from "lodash";
import PostPagination from "@/components/module/PostPagination";

const pageSize = 12
export const dynamicParams = false;
export function generateStaticParams() {
    const categories = allPosts.flatMap(post => post.category);
    const uniqueCategories = [...new Set(categories)].filter(c => c !== undefined);

    return uniqueCategories.map((c) => ({
        name: encodeURIComponent(c.trim()),
    }));
}

const Page = ({params, searchParams}) => {
    const page = parseInt(searchParams?.page || "1");
    const name = decodeURIComponent(params.name);
    const posts = allPosts.filter(p => {
        if(!p?.category) return false
        return p.category?.findIndex(c => c === name) !== -1
    }).filter(p => !p?.draft)
    const currentPosts = _.slice(posts, (page - 1) * pageSize, page * pageSize);

    return (
        <MainColumn>
            <PageHeader title={name}></PageHeader>
            <div>
                <PostList data={currentPosts}></PostList>
                <PostPagination count={posts.length} pageSize={pageSize} page={page}/>
            </div>
        </MainColumn>
    );
};

export default Page;
