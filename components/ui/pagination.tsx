import * as React from "react"
import {ChevronLeft, ChevronRight, MoreHorizontal} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button, ButtonProps} from "@/components/ui/button"

const Pagination = ({className, ...props}: React.ComponentProps<"nav">) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
    />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<"ul">
>(({className, ...props}, ref) => (
    <ul
        ref={ref}
        className={cn("flex flex-row items-center gap-1", className)}
        {...props}
    />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<"li">
>(({className, ...props}, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
    isActive?: boolean
    className?: string
} & Pick<ButtonProps, "size">

const PaginationLink = ({
                            className,
                            isActive,
                            size = "icon",
                            ...props
                        }: PaginationLinkProps) => (
    <Button
        aria-current={isActive ? "page" : undefined}
        size={size}
        variant="ghost"
        className={cn(
            isActive && 'bg-accent',
            className
        )}
        {...props}
    />
)
PaginationLink.displayName = "PaginationLink"


const PaginationPrevious = ({
                                className,
                                ...props
                            }: React.ComponentProps<typeof PaginationLink>) => (
    // @ts-ignore
    <PaginationLink
        aria-label="上一页"
        size="icon"
        className={className}
        {...props}
    >
        <ChevronLeft className="h-4 w-4"/>
    </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"


const PaginationNext = ({
                            className,
                            ...props
                        }: React.ComponentProps<typeof PaginationLink>) => (
    // @ts-ignore
    <PaginationLink
        aria-label="下一页"
        size="icon"
        className={cn(className)}
        {...props}
    >
        <ChevronRight className="h-4 w-4"/>
    </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
                                className,
                                ...props
                            }: React.ComponentProps<"span">) => (
    <span
        aria-hidden
        className={cn("flex h-9 w-9 items-center justify-center", className)}
        {...props}
    >
    <MoreHorizontal className="h-4 w-4"/>
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
}