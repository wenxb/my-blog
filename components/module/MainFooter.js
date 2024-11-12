import useConfig from "@/lib/hook/useConfig";

const MainFooter = () => {
    const config = useConfig()
    return (
        <footer className={'p-4 text-sm text-gray-500 border-t'}>
            {config.site.icp && config.site.icp + ' ｜ '}©Copyright By {config.author.name}
        </footer>
    );
};

export default MainFooter;
