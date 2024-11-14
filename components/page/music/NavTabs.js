'use client'
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useRouter} from "next/navigation";

const NavTabs = () => {
    const router = useRouter();
    const handleClick = (key) => {
        router.replace(key);
    }

    return (
        <Tabs defaultValue={'/'}>
            <TabsList>
                <TabsTrigger className={'flex-1'} onClick={() => handleClick('/music')} value="/">首页</TabsTrigger>
                <TabsTrigger className={'flex-1'} onClick={() => handleClick('/music/my')} value="my">我的</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default NavTabs;
