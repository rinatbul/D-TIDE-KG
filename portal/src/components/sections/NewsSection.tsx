import { useState } from 'react';
import { NewsCard } from '../ui/NewsCard';
import { Pagination } from '../ui/Pagination';
import { SectionTitle } from '../ui/SectionTitle';
import { CardGrid } from '../ui/CardGrid';
import { ContentContainer } from '../ui/ContentContainer';
import { mockNews } from '../../mocks/news';

export const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockNews.length / itemsPerPage);

  return (
    <section className="mb-21 bg-white">
      <ContentContainer variant="container-px30">
        <SectionTitle variant="blue">НОВОСТИ</SectionTitle>
        <CardGrid>
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
        </CardGrid>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          variant="news"
        />
      </ContentContainer>
    </section>
  );
};

