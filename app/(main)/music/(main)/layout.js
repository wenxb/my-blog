import PageHeader from "@/components/module/PageHeader";
import MainColumn from "@/components/module/MainColumn";
import NavTabs from "@/components/page/music/NavTabs";
import HomeSearch from "@/components/page/music/HomeSearch";

const Layout = ({children}) => {
    return (
        <>
            <MainColumn>
                <PageHeader hideBar title={"音乐"} footer={(
                    <NavTabs/>
                )}>
                    <HomeSearch/>
                </PageHeader>
                <div className={'pb-10'}>
                    {children}
                </div>
            </MainColumn>
        </>
    );
};

export default Layout;
