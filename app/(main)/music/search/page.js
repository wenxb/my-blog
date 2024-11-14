"use client"
import MainColumn from "@/components/module/MainColumn";
import PageHeader from "@/components/module/PageHeader";
import SearchTabs from "@/components/page/music/SearchTabs";
import SearchBlock from "@/components/page/music/SearchBlock";
import {useRouter} from "next/navigation";

const Page = ({searchParams}) => {
    const {word} = searchParams;
    const router = useRouter()

    const onSearch = (value) => {
        if (!value) return;
        router.replace("/music/search?word=" + value)
    }
    return (
        <MainColumn>
            <PageHeader footer={<SearchTabs/>}>
                <SearchBlock onSearch={onSearch} defaultValue={word ?? ""}/>
            </PageHeader>
            search
        </MainColumn>
    );
};

export default Page;
