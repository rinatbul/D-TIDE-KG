import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsCard, type NewsItem } from '../ui/NewsCard';

const mockNews: NewsItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  date: `${10 + (i % 20)}.${(i % 12) + 1}.2025`,
  type: i % 2 === 0 ? 'МЕРОПРИЯТИЯ' : 'СЕМИНАР',
  title: `Заголовок новости ${i + 1}`,
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
}));

export const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockNews.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className="mb-21 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-onest font-bold text-[36px] leading-none uppercase text-center text-blue-primary mb-12">НОВОСТИ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              variant="link"
              dateSeparator=" - "
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 select-none">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-[rgba(145,158,171,0.3)] text-white transition-colors duration-300 hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${currentPage === 1 ? 'bg-[rgba(9,141,34,0.3)]' : 'bg-[rgba(145,158,171,0.3)]'} text-black transition-all duration-300 hover:bg-opacity-80`}
          >
            1
          </button>
          
          {currentPage > 3 && totalPages > 4 && (
            <span className="w-8 h-8 flex items-center justify-center font-onest font-medium text-sm text-[#919EAB]">...</span>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => page !== 1 && page !== totalPages && Math.abs(page - currentPage) <= 1)
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${currentPage === page ? 'bg-[rgba(9,141,34,0.3)]' : 'bg-[rgba(145,158,171,0.3)]'} text-black transition-all duration-300 hover:bg-opacity-80`}
              >
                {page}
              </button>
            ))}
          
          {currentPage < totalPages - 2 && totalPages > 4 && (
            <span className="w-8 h-8 flex items-center justify-center font-onest font-medium text-sm text-[#919EAB]">...</span>
          )}
          
          {totalPages > 1 && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${currentPage === totalPages ? 'bg-[rgba(9,141,34,0.3)]' : 'bg-[rgba(145,158,171,0.3)]'} text-black transition-all duration-300 hover:bg-opacity-80`}
            >
              {totalPages}
            </button>
          )}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-[rgba(145,158,171,0.3)] text-white transition-colors duration-300 hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

