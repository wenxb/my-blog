import MusicControl from "@/components/page/music/MusicControl";
import SideRightWrap from "@/components/sideRight/SideRightWrap";

const Layout = ({children}) => {
    return (
        <div className={'flex'}>
            <div className={'flex-1'}>
                {children}
            </div>
            <SideRightWrap>
                <div className={'pt-3 sticky top-0'}>
                    <MusicControl/>
                </div>
            </SideRightWrap>
        </div>
    );
};

export default Layout;
