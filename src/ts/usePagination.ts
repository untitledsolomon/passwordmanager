import { useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number = 12) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return {
        currentItems,
        currentPage,
        totalPages,
        goToPage,
        nextPage: () => goToPage(currentPage + 1),
        prevPage: () => goToPage(currentPage - 1),
    };
}