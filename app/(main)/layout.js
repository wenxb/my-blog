import SideMenu from "@/components/sidebar/SideMenu";

const Layout = ({children}) => {
    return (
        <>
            <div className="flex min-h-screen w-full">
                <SideMenu/>
                <div className="flex flex-grow w-[1050px]">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
