"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {usePathname, useRouter} from "next/navigation";

const YPagination = ({page, pageSize, count}) => {
    const totalPages = Math.ceil(count / pageSize);
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (p) => {
        router.replace(`${pathname}?page=${p}`)
    }

    const generatePageLinks = () => {
        const pages = [];
        if (totalPages <= 1) return pages;

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        isActive={page === i}
                        onClick={() => handleClick(i)}
                        className={page === i ? "active-class" : ""}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        return pages;
    };

    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => handleClick(Math.max(page - 1, 1))}
                        />
                    </PaginationItem>
                )}
                {generatePageLinks()}
                {page < totalPages && (
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => handleClick(Math.min(page + 1, totalPages))}
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default YPagination;
