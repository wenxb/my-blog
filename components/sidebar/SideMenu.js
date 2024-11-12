import React from 'react';
import SideTop from "@/components/sidebar/SideTop";
import MenuContent from "@/components/sidebar/MenuContent";

const SideMenu = () => {
    return (
        <header className="flex-grow flex justify-end">
            <div className={'w-[262px] ml-16 border-r'}>
                <div className='w-[262px] fixed pl-4 overflow-y-auto h-full flex flex-col'>
                    <SideTop/>
                    <div className={'py-3 -ml-4 w-full'}>
                        <MenuContent/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SideMenu;
