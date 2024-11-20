import {BoxIcon, CompassIcon, HouseIcon, UserRoundIcon, WrenchIcon} from "lucide-react";
import useConfig from "@/lib/hook/useConfig";
import MenuItem from "@/components/sidebar/MenuItem";

const MenuContent = () => {
    const config = useConfig()

    return (
        <ul className={'flex flex-col w-full pr-2'}>
            <MenuItem icon={<HouseIcon/>} href="/">
                首页
            </MenuItem>
            {config.page.tools.enable && (
                <MenuItem icon={<WrenchIcon/>} href="/tools">
                    工具
                </MenuItem>
            )}
            <MenuItem icon={<CompassIcon/>} href="/links">
                导航
            </MenuItem>
            <MenuItem icon={<BoxIcon/>} href="/category">
                分类
            </MenuItem>
            <MenuItem icon={<UserRoundIcon/>} href="/about">
                关于我
            </MenuItem>
        </ul>
    );
};

export default MenuContent;
