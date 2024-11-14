"use client"
import SearchBlock from "@/components/page/music/SearchBlock";
import {useRouter} from "next/navigation";

const HomeSearch = () => {
    const router = useRouter()
    const handleOnSearch = (value) => {
        if(!value) return;
        router.push("/music/search?word=" + value)
    }

    return (
        <SearchBlock onSearch={handleOnSearch}/>
    );
};

export default HomeSearch;
