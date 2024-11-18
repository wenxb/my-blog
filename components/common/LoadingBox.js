import React from 'react';
import {ProgressActivity} from "@/components/common/icons";
import {cn} from "@/lib/utils";

const LoadingBox = ({className}) => {
    return (
        <div className={cn(
            'flex justify-center items-center flex-1 w-full',
            className,
        )}>
            <ProgressActivity className={"text-3xl"} isActive/>
        </div>
    );
};

export default LoadingBox;
