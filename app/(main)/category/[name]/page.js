import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import {allPosts} from "contentlayer/generated";
import PostList from "@/components/lists/PostList";


export const dynamicParams = false;
export function generateStaticParams() {
    const categories = allPosts.flatMap(post => post.category);
    const uniqueCategories = [...new Set(categories)].filter(c => c !== undefined);

    return uniqueCategories.map((c) => ({
        name: encodeURIComponent(c),
    }));
}

const Page = ({params}) => {
    const name = decodeURIComponent(params.name);
    const posts = allPosts.filter(p => p.category.findIndex(c => c === name) !== -1).filter(p => !p?.draft)

    return (
        <MainColumn>
            <PageHeader title={name}></PageHeader>
            <div>
                <PostList data={posts}>

                </PostList>
            </div>
        </MainColumn>
    );
};

export default Page;
