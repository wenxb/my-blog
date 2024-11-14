'use client'
import {Button} from "@/components/ui/button";
import {ArrowLeftIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

const PageHeader = ({title, barSlot, secondary, children, hideBar, footer, hideBack}) => {
    const router = useRouter();

    return (
        <div className={'flex flex-col border-b relative'}>
            {!hideBar && (
                <div
                    className={'sticky top-0 w-full z-[90] h-[54px] px-4 flex items-center bg-white/80 backdrop-blur-2xl'}>
                    {!hideBack && (
                        <div className={'min-w-12'}>
                            <Button onClick={router.back} variant={'ghost'} className={'-ml-2'} size="icon">
                                <ArrowLeftIcon className={'text-xl'}/>
                            </Button>
                        </div>
                    )}
                    {barSlot}
                </div>
            )}
            {(title || children) && (
                <div className={cn(
                    'relative flex flex-col justify-center items-center p-6',
                    (hideBar || !footer) && 'min-h-[170px]'
                )}>
                    {title && <div className={'text-2xl mb-3'}>{title}</div>}
                    {secondary && <div className={'text-gray-500'}>{secondary}</div>}
                    {children}
                </div>
            )}
            {footer &&
                <div className={'flex flex-col w-full'}>
                    {footer}
                </div>
            }
        </div>

    );
};

export default PageHeader;
