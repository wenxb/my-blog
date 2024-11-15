'use client'
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {usePathname, useRouter} from "next/navigation";

const NavTabs = () => {
    const router = useRouter();
    const pathname = usePathname()
    const handleClick = (key) => {
        router.replace(key);
    }

    return (
        <Tabs defaultValue={pathname} onValueChange={handleClick}>
            <TabsList>
                <TabsTrigger className={'flex-1'} value="/music">首页</TabsTrigger>
                <TabsTrigger className={'flex-1'} value="/music/my">我的</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default NavTabs;
