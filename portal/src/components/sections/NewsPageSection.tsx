import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsCard, type NewsItem } from '../ui/NewsCard';

interface NewsItemWithCategory extends NewsItem {
  category: string;
}

const mockNews: NewsItemWithCategory[] = Array.from({ length: 30 }, (_, i) => {
  const categoryIndex = i % 4;
  const categories = ['Мероприятия', 'Семинар', 'Мероприятия', 'Круглый стол'];
  const types = ['МЕРОПРИЯТИЯ СЕМИНАР', 'СЕМИНАР', 'МЕРОПРИЯТИЯ', 'КРУГЛЫЙ СТОЛ'];
  
  return {
    id: i + 1,
    date: `10.10.2025`,
    type: types[categoryIndex],
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...',
    category: categories[categoryIndex],
  };
});

const categories = ['Все', 'Мероприятия', 'Семинар', 'Круглый стол'];

export const NewsPageSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const filteredNews = selectedCategory === 'Все' 
    ? mockNews 
    : mockNews.filter(news => news.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedCategory]);

  return (
    <div>
      <div className="flex gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded font-onest font-medium text-sm leading-none transition-colors duration-300 ${
              selectedCategory === category
                ? 'bg-[#1EB53A] text-white'
                : 'bg-[#E8F5E9] text-black hover:bg-[#C8E6C9]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedNews.map((news) => (
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
  );
};

