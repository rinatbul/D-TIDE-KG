import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { NewsDetailCarousel } from '../components/sections/NewsDetailCarousel';
import { RelatedNewsSection } from '../components/sections/RelatedNewsSection';
import { Divider } from '../components/ui/Divider';
import { mockNewsContent, defaultNewsContent } from '../mocks/news';

export const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsId = id ? parseInt(id, 10) : null;
  const news = newsId && mockNewsContent[newsId] 
    ? mockNewsContent[newsId]
    : { ...defaultNewsContent, id: newsId || 1 };

  return (
    <PageLayout
      breadcrumbItems={[
                { label: 'Новости', path: '/news' },
                { label: news.title }
              ]}
      title={news.title}
      titleMb="4"
      additionalContent={
        <>
          <Divider />
          <RelatedNewsSection />
        </>
      }
    >
              <p className="font-onest font-normal text-sm leading-none text-gray-text mb-8">
                <span>{news.date}</span>
                <span className="mx-2">{news.type}</span>
              </p>

              <NewsDetailCarousel />

              <div className="font-onest font-normal text-base leading-relaxed text-black">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
    </PageLayout>
  );
};

