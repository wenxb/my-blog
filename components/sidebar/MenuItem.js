'use client'
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const MenuItem = ({children, icon, href, ...props}) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li>
            <Link
                className={cn('group flex items-center rounded-full px-4 h-14 hover:bg-accent w-full transition-colors')}
                href={href} {...props}>
                <div className={cn('text-2xl text-foreground/80', isActive && 'text-foreground')}>
                    {icon}
                </div>
                <span
                    className={cn('text-xl ml-4 text-foreground/80', isActive && 'font-bold text-foreground')}>{children}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
