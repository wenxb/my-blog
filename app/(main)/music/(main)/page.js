import PlayList from "@/components/lists/PlayList";
import SectionTitle from "@/components/module/SectionTitle";

const Page = () => {
    return (
        <div className={'py-2'}>
            <SectionTitle>私人歌单</SectionTitle>
            <PlayList/>
            <SectionTitle>推荐歌单</SectionTitle>
            <PlayList/>
        </div>
    );
};

export default Page;
