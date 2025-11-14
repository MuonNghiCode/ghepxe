interface OrderPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function OrderPagination({
  currentPage,
  totalPages,
  onPageChange,
}: OrderPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border transition-all ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Trước
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }

          return (
            <button
              key={i}
              onClick={() => onPageChange(pageNum)}
              className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                currentPage === pageNum
                  ? "bg-[var(--primary-green)] text-white shadow-lg"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border transition-all ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Sau
      </button>
    </div>
  );
}
