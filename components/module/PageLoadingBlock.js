import LoadingBox from "@/components/common/LoadingBox";
import MainColumn from "@/components/module/MainColumn";

const PageLoadingBlock = () => {
    return (
        <MainColumn>
            <LoadingBox className={'min-h-28'}/>
        </MainColumn>
    );
};

export default PageLoadingBlock;
