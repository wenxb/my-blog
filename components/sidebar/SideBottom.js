import React from 'react';
import {Button} from "@/components/ui/button";
import {MusicIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";

const SideBottom = () => {
    return (
        <div className={'flex gap-3 pb-6'}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild variant={'ghost'} size={'icon'}>
                        <Link href={'/music'}>
                            <MusicIcon/>
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>音乐</TooltipContent>
            </Tooltip>
        </div>
    );
};

export default SideBottom;
