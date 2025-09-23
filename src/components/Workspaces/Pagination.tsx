const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
  isFetching,
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  isFetching: boolean;
}) => {
  const maxVisiblePages = 5;

  const handleGetPageNumber = (): (string | number)[] => {
    const pages: (string | number)[] = [];

    pages.push(1);

    let start = Math.max(2, currentPage - 2);
    let end = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage <= 3) {
      start = 2;
      end = Math.min(totalPages - 1, maxVisiblePages);
    }

    if (start > 2) pages.push('...');

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push('...');
    }

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pageNumbers = handleGetPageNumber();

  return (
    <div className='flex items-center justify-center gap-2 py-4'>
      {/* Prev */}
      <button
        className='px-3 py-1 rounded-lg border border-gray-300 bg-noble-black-500 text-noble-black-200 disabled:opacity-50 disabled:cursor-wait cursor-pointer'
        disabled={currentPage === 1 || isFetching}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {/* Page numbers */}
      {pageNumbers.map((num, idx) =>
        typeof num === 'number' ? (
          <button
            key={idx}
            onClick={() => onPageChange(num)}
            className={`px-3 py-1 rounded-lg  cursor-pointer ${
              currentPage === num
                ? 'bg-stem-green-600 text-stem-green-900 font-semibold'
                : 'bg-noble-black-500 text-noble-black-200 hover:bg-noble-black-900 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
            disabled={isFetching}
          >
            {num}
          </button>
        ) : (
          <span key={idx} className='px-2 text-noble-black-300 select-none'>
            {num}
          </span>
        ),
      )}

      {/* Next */}
      <button
        className='px-3 py-1 rounded-lg border border-gray-300 bg-noble-black-500 text-noble-black-200 disabled:opacity-50 disabled:cursor-wait cursor-pointer'
        disabled={currentPage === totalPages || isFetching}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
