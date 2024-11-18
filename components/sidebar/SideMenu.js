import React from 'react';
import SideTop from "@/components/sidebar/SideTop";
import MenuContent from "@/components/sidebar/MenuContent";
import SideBottom from "@/components/sidebar/SideBottom";

const SideMenu = () => {
    return (
        <header className="flex-grow flex justify-end">
            <div className={'w-[255px] ml-16 border-r'}>
                <div className='w-[255px] fixed pl-4 overflow-y-auto h-full flex flex-col'>
                    <SideTop/>
                    <div className={'py-1 -ml-4 w-full'}>
                        <MenuContent/>
                    </div>
                    <div className={'flex-1'}></div>
                    <div>
                        <SideBottom/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SideMenu;
