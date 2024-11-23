import React from 'react';
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";

const Page = () => {
    return (
        <>
            <MainColumn>
                <PageHeader hideBack title={"导航"}/>
            </MainColumn>
        </>
    );
};

export default Page;
