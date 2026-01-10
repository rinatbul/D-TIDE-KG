import { useState } from 'react';
import { NewsCard } from '../ui/NewsCard';
import { Pagination } from '../ui/Pagination';
import { CardGrid } from '../ui/CardGrid';
import { mockNewsWithCategory, newsCategories } from '../../mocks/news';

export const NewsPageSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const filteredNews = selectedCategory === 'Все' 
    ? mockNewsWithCategory 
    : mockNewsWithCategory.filter(news => news.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex gap-4 mb-10">
        {newsCategories.map((category) => (
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

      <CardGrid>
        {paginatedNews.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
            variant="link"
            showReadMore={true}
            readMoreColor="blue"
            dateSeparator=" - "
          />
        ))}
      </CardGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        variant="news"
      />
    </div>
  );
};

