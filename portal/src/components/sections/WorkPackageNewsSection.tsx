import { Link } from 'react-router-dom';
import { NewsCard, type NewsItem } from '../ui/NewsCard';

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ • СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis'
  },
  {
    id: 2,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ • СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis'
  },
  {
    id: 3,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ • СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis'
  }
];

export const WorkPackageNewsSection = () => {
  return (
    <section className="mb-21 bg-[#F0F0F0]">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="font-onest font-bold text-[36px] leading-none uppercase text-center text-[#0052B4] mb-12">НОВОСТИ:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              variant="div"
              showReadMore={true}
              readMoreColor="blue"
              dateSeparator=" · "
              hoverEffect="shadow"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/news" className="font-onest font-medium text-base leading-none text-black border-2 border-black rounded-lg py-3 px-8 no-underline transition-all duration-300 hover:text-[#0052B4] hover:border-[#0052B4]">
            Больше новостей
          </Link>
        </div>
      </div>
    </section>
  );
};

