import { Link } from 'react-router-dom';
import newsImage from '/news.png';

interface NewsItem {
  id: number;
  date: string;
  type: string;
  title: string;
  excerpt: string;
}

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
    <section className="py-16 bg-[#F0F0F0]">
      <div className="container mx-auto px-4">
        <h2 className="font-onest font-bold text-[36px] leading-none uppercase text-center text-blue-primary mb-12">НОВОСТИ:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white rounded-[10px] border border-gray-border overflow-hidden transition-shadow duration-300 hover:shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)]">
              <img
                src={newsImage}
                alt={news.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="mb-2">
                  <span className="font-onest font-normal text-[10px] leading-none text-red-primary">{news.date}</span>
                  <span className="font-onest text-[10px] text-black"> · </span>
                  <span className="font-onest font-medium text-[10px] leading-none uppercase text-black">{news.type}</span>
                </p>
                <h3 className="font-onest font-semibold text-xl leading-none text-black mb-2 transition-colors duration-300 group-hover:text-blue-primary">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                <Link
                  to={`/news/${news.id}`}
                  className="font-onest font-medium text-xs leading-none text-blue-primary no-underline"
                >
                  Подробнее &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/news" className="font-onest font-medium text-base leading-none text-blue-primary border-2 border-blue-primary rounded-lg py-3 px-8 no-underline transition-all duration-300 hover:bg-blue-primary hover:text-white">
            Больше новостей
          </Link>
        </div>
      </div>
    </section>
  );
};

