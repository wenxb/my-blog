import dynamic from "next/dynamic";

const MusicControl = dynamic(() => import("@/components/page/music/MusicControl").then(mod => mod.default), {ssr: false});

const SideRightWrap = ({children, stickyWrap, showMusic = true}) => {
    return (
        <div
            style={{
                width: 'var(--side-right-width)',
            }}
            className={'ml-4'}
        >
            <div className={'sticky top-3'}>
                {showMusic && <MusicControl/>}
                {stickyWrap}
            </div>

            {children}
        </div>
    );
};

export default SideRightWrap;
