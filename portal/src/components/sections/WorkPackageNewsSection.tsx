import { NewsCard } from '../ui/NewsCard';
import { SectionTitle } from '../ui/SectionTitle';
import { CardGrid } from '../ui/CardGrid';
import { ContentContainer } from '../ui/ContentContainer';
import { ViewMoreButton } from '../ui/ViewMoreButton';
import { workPackageNews } from '../../mocks/news';

export const WorkPackageNewsSection = () => {
  return (
    <section className="mb-21 bg-[#F0F0F0]">
      <ContentContainer variant="screen-2xl-px4">
        <SectionTitle variant="black">НОВОСТИ:</SectionTitle>
        <CardGrid>
          {workPackageNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              variant="div"
              showReadMore={true}
              readMoreColor="blue"
              dateSeparator=" · "
              hoverEffect="translate"
            />
          ))}
        </CardGrid>
        <ViewMoreButton to="/news" variant="outline-thick" />
      </ContentContainer>
    </section>
  );
};

