import { useState } from 'react';
import { NewsCard, type NewsItem } from '../ui/NewsCard';
import { Pagination } from '../ui/Pagination';

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

  return (
    <section className="mb-21 bg-white">
      <div className="container mx-auto px-30">
        <h2 className="font-onest font-bold text-[36px] leading-none uppercase text-center text-[#0052B4] mb-12">НОВОСТИ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              variant="link"
              showReadMore={true}
              readMoreColor="blue"
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
    </section>
  );
};

