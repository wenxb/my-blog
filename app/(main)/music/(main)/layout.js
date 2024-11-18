import PageHeader from "@/components/module/PageHeader";
import MainColumn from "@/components/module/MainColumn";
import NavTabs from "@/components/page/music/NavTabs";

const Layout = ({children}) => {
    return (
        <>
            <MainColumn>
                <PageHeader barSlot={(
                    <div className={'text-xl font-semibold'}>音乐</div>
                )} hideBack footer={(
                    <NavTabs/>
                )}>
                </PageHeader>
                <div className={'pb-10'}>
                    {children}
                </div>
            </MainColumn>
        </>
    );
};

export default Layout;
