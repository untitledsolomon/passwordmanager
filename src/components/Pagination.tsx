import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    goToPage,
}: PaginationProps) {
    return (
        <div className="flex items-center gap-2 mt-4 justify-center">
            <button 
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-default cursor-pointer hover:bg-red-500 disabled:bg-background"
            >
                Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={"px-3 py-1 border rounded cursor-pointer hover:bg-red-500 ${ currentPage === i + 1 ? 'bg-red-500 text-white' : '' }"}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-default cursor-pointer hover:bg-red-500 disabled:bg-background"
            >
                Next
            </button>
        </div>
    );
}