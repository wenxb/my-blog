'use client'
import Link from "next/link";
import {BoxIcon, CompassIcon, HouseIcon, UserRoundIcon, WrenchIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const MenuItem = ({children, icon: Icon, href, ...props}) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li>
            <Link className={cn('group flex items-center rounded-full px-4 h-14 hover:bg-accent w-full transition-colors')}
                  href={href} {...props}>
                <Icon className={cn('text-2xl transition-transform text-foreground/80', isActive && 'stroke-[2.5] text-foreground')}/>
                <span className={cn('text-xl ml-4 text-foreground/80', isActive && 'font-bold text-foreground')}>{children}</span>
            </Link>
        </li>
    )
}

const MenuContent = () => {
    return (
        <ul className={'flex flex-col w-full pr-2'}>
            <MenuItem icon={HouseIcon} href="/">
                首页
            </MenuItem>
            <MenuItem icon={WrenchIcon} href="/tools">
                工具
            </MenuItem>
            <MenuItem icon={CompassIcon} href="/links">
                导航
            </MenuItem>
            <MenuItem icon={BoxIcon} href="/category">
                分类
            </MenuItem>
            <MenuItem icon={UserRoundIcon} href="/about">
                关于我
            </MenuItem>
        </ul>
    );
};

export default MenuContent;
