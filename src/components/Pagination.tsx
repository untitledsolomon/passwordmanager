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
                className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-default cursor-pointer hover:bg-gray-700 disabled:bg-background"
            >
                Prev
            </button>

            {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                const isActive = page === currentPage

                return(
                    <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 border rounded transition-colors cursor-pointer hover:bg-gray-700 ${ isActive ? 'bg-red-500 text-white' : '' }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-default cursor-pointer hover:bg-gray-700 disabled:bg-background"
            >
                Next
            </button>
        </div>
    );
}