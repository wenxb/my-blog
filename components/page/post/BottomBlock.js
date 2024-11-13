'use client'
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {CopyIcon} from "lucide-react";
import {useToast} from "@/hooks/use-toast";

const BottomBlock = ({config, id}) => {
    const { toast } = useToast()

    const handleClick = (key) => {
        switch (key) {
            case 'copyLick':
                const link= `${config.site.url}/post/${id}`;
                navigator.clipboard.writeText(link).then(() => {
                    toast({
                        title: "已复制到剪切板",
                        variant: "info"
                    })
                }).catch(err => {
                    toast({
                        title: "复制失败！"
                    })
                    console.error("复制失败！", err);
                });
            break;
        }
    }

    return (
        <div className={'flex items-center w-full absolute bottom-0 left-0 p-3'}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={()=>handleClick('copyLick')} className={'rounded-full text-gray-500'} variant={'ghost'} size={'icon'}>
                        <CopyIcon/>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>复制链接</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
};

export default BottomBlock;
