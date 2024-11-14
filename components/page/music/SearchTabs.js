'use client'
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

const SearchTabs = ({tabClick}) => {
    return (
        <Tabs defaultValue={'/'}>
            <TabsList>
                <TabsTrigger className={'flex-1'} onClick={() => tabClick('song')} value="/">歌曲</TabsTrigger>
                <TabsTrigger className={'flex-1'} onClick={() => tabClick('playlist')} value="my">歌单</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default SearchTabs;
