import { Link } from 'react-router-dom';
import { NewsCard, type NewsItem } from '../ui/NewsCard';
import { CardGrid } from '../ui/CardGrid';

const relatedNews: NewsItem[] = [
  {
    id: 1,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...'
  },
  {
    id: 2,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...'
  },
  {
    id: 3,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...'
  }
];

export const RelatedNewsSection = () => {
  return (
    <section className="mb-21 mt-10">
      <div className="max-w-screen-2xl mx-auto px-4">
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

        <div className="flex justify-center">
          <Link
            to="/news"
            className="px-8 py-3 border border-blue-secondary text-blue-secondary rounded font-onest font-medium text-base leading-none transition-all duration-300 hover:border-[#0052B4] hover:text-[#0052B4] no-underline"
          >
            Больше новостей
          </Link>
        </div>
      </div>
    </section>
  );
};

