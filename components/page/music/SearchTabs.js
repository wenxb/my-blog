'use client'
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

const SearchTabs = ({tabClick}) => {
    return (
        <Tabs defaultValue={'song'} onValueChange={tabClick}>
            <TabsList>
                <TabsTrigger className={'flex-1'} value="song">歌曲</TabsTrigger>
                <TabsTrigger className={'flex-1'} value="playlist">歌单</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default SearchTabs;
