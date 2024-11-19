"use client"
import YPagination from "@/components/common/YPagination";

const PostPagination = ({page, count, pageSize}) => {
    const totalPages = Math.ceil(count / pageSize);

    if (page > totalPages) {
        page = 1
    }

    return (
        <div className={'mt-6'}>
            <YPagination page={page} pageSize={pageSize} count={count}/>
        </div>
    );
};

export default PostPagination;
