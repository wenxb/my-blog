import React from 'react';
import {allPosts} from "contentlayer/generated";
import MainColumn from "@/components/module/MainColumn";
import Link from "next/link";
import PageHeader from "@/components/module/PageHeader";

const Page = () => {
    const categories = allPosts.flatMap(post => post.category);
    const uniqueCategories = [...new Set(categories)].filter(c => c !== undefined);

    return (
        <MainColumn>
            <PageHeader title={'所有分类'} hideBar
                        secondary={uniqueCategories.length > 0 ? `${uniqueCategories.length}个分类` : '还没有分类'}></PageHeader>
            <div className={'p-6 flex flex-col items-center'}>
                <ul className={'flex flex-wrap gap-2 py-6'}>
                    {
                        uniqueCategories.map((category, index) => (
                            <li key={index}>
                                <Link className={'text-xl px-6 py-3 rounded-xl transition-colors hover:bg-gray-100'}
                                      href={'/category/' + category}>
                                    {category}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </MainColumn>
    );
};

export default Page;
