import SideRightWrap from "@/components/sideRight/SideRightWrap";
import SideLyric from "@/components/page/music/SideLyric";

const Layout = ({children}) => {
    return (
        <div className={'flex'}>
            <div className={'flex-1'}>
                {children}
            </div>
            <SideRightWrap stickyWrap={<SideLyric/>}>
            </SideRightWrap>
        </div>
    );
};

export default Layout;
