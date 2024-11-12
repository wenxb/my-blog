'use client'
import {Button} from "@/components/ui/button";
import {ArrowLeftIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

const PageHeader = ({title,secondary, children, hideBar}) => {
    const router = useRouter();

    return (
        <>
            {!hideBar && (
                <div
                    className={'sticky top-0 w-full z-[90] h-[54px] px-4 flex items-center bg-white/80 backdrop-blur-2xl'}>
                    <Button onClick={router.back} variant={'ghost'} className={'rounded-full -ml-2'} size="icon">
                        <ArrowLeftIcon/>
                    </Button>
                </div>
            )}
            <div className={cn(
                'flex flex-col justify-center items-center p-6 min-h-[200px] border-b',
                !hideBar && '-mt-[54px]'
            )}>
                <div className={'text-3xl font-bold text-gray-800'}>{title}</div>
                {secondary && (
                    <div className={'mt-3 text-sm text-gray-500'}>{secondary}</div>
                )}
                {children}
            </div>
        </>

    );
};

export default PageHeader;
