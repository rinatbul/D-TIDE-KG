import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'news' | 'documentation';
  selectNone?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'news',
  selectNone = true,
}: PaginationProps) => {
  const isNewsVariant = variant === 'news';

  const navButtonClass = isNewsVariant
    ? 'w-8 h-8 flex items-center justify-center rounded-[3px] bg-[rgba(145,158,171,0.3)] text-white transition-colors duration-300 hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed'
    : 'w-8 h-8 flex items-center justify-center rounded-[3px] bg-gray-text text-white opacity-30 transition-colors duration-300 hover:text-blue-primary disabled:opacity-20 disabled:cursor-not-allowed';

  const pageButtonClass = (isActive: boolean) => {
    if (isNewsVariant) {
      return `w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${isActive ? 'bg-[rgba(9,141,34,0.3)]' : 'bg-[rgba(145,158,171,0.3)]'} text-black transition-all duration-300 hover:bg-opacity-80`;
    }
    return `w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${isActive ? 'bg-green-secondary opacity-30' : 'bg-gray-text opacity-30'} text-black transition-all duration-300 hover:bg-green-secondary`;
  };

  const ellipsisClass = isNewsVariant
    ? 'w-8 h-8 flex items-center justify-center font-onest font-medium text-sm text-[#919EAB]'
    : 'w-8 h-8 flex items-center justify-center font-onest font-medium text-sm text-gray-text';

  const containerClass = `flex justify-center items-center gap-2${selectNone ? ' select-none' : ''}`;

  return (
    <div className={containerClass}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={navButtonClass}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={() => onPageChange(1)}
        className={pageButtonClass(currentPage === 1)}
      >
        1
      </button>

      {currentPage > 3 && totalPages > 4 && (
        <span className={ellipsisClass}>...</span>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter(page => page !== 1 && page !== totalPages && Math.abs(page - currentPage) <= 1)
        .map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={pageButtonClass(currentPage === page)}
          >
            {page}
          </button>
        ))}

      {currentPage < totalPages - 2 && totalPages > 4 && (
        <span className={ellipsisClass}>...</span>
      )}

      {totalPages > 1 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className={pageButtonClass(currentPage === totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={navButtonClass}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

