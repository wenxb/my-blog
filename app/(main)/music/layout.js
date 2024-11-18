"use client"
import SideRightWrap from "@/components/sideRight/SideRightWrap";
import dynamic from "next/dynamic";
import {useSelector} from "react-redux";

const SideLyric = dynamic(() => import("@/components/page/music/SideLyric").then(mod => mod.default), {ssr: false});

const Layout = ({children}) => {
    const showYrlics = useSelector(state => state.musicState.showYrlics)

    return (
        <div className={'flex'}>
            <div className={'flex-1'}>
                {children}
            </div>
            <SideRightWrap stickyWrap={showYrlics ? <SideLyric/> : null}>
            </SideRightWrap>
        </div>
    );
};

export default Layout;
