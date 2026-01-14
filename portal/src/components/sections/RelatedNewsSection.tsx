import { NewsCard } from '../ui/NewsCard';
import { CardGrid } from '../ui/CardGrid';
import { ContentContainer } from '../ui/ContentContainer';
import { ViewMoreButton } from '../ui/ViewMoreButton';
import { relatedNews } from '../../mocks/news';

export const RelatedNewsSection = () => {
  return (
    <section className="mb-21 mt-10">
      <ContentContainer variant="screen-2xl-px4">
        <h2 className="font-onest font-medium text-[20px] leading-none uppercase text-left text-black mb-10">СМОТРИТЕ ТАКЖЕ</h2>
        
        <CardGrid>
          {relatedNews.map((news) => (
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

        <ViewMoreButton to="/news" variant="outline-thick" />
      </ContentContainer>
    </section>
  );
};

