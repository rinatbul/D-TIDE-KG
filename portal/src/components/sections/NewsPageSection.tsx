import { useState } from 'react';
import { NewsCard, type NewsItem } from '../ui/NewsCard';
import { Pagination } from '../ui/Pagination';

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        variant="news"
      />
    </div>
  );
};

