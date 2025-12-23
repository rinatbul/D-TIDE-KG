import { Link } from 'react-router-dom';
import newsImage from '/news.png';

interface NewsItem {
  id: number;
  date: string;
  type: string;
  title: string;
  excerpt: string;
}

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
    <section className="mb-21">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="font-onest font-bold text-[32px] leading-none text-left text-black mb-10">СМОТРИТЕ ТАКЖЕ</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {relatedNews.map((news) => (
            <Link
              key={news.id}
              to={`/news/${news.id}`}
              className="group bg-white rounded-[10px] border border-gray-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] block no-underline"
            >
              <img
                src={newsImage}
                alt={news.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="mb-2">
                  <span className="font-onest font-normal text-[10px] leading-none text-red-primary">{news.date}</span>
                  <span className="font-onest text-[10px] text-black"> - </span>
                  <span className="font-onest font-medium text-[10px] leading-none uppercase text-black">{news.type}</span>
                </p>
                <h3 className="font-onest font-semibold text-xl leading-none text-black mb-2 transition-colors duration-300 group-hover:text-blue-primary">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                <span className="font-onest font-medium text-xs leading-none text-green-primary">Подробнее &gt;</span>
              </div>
            </Link>
          ))}
        </div>

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

