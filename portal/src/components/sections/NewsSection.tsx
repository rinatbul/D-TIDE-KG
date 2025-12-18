import { useState } from 'react';
import { Link } from 'react-router-dom';
import newsImage from '/news.png';

interface NewsItem {
  id: number;
  date: string;
  type: string;
  title: string;
  excerpt: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    date: '10.01.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Заголовок новости 1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
  },
  {
    id: 2,
    date: '10.01.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Заголовок новости 2',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
  },
  {
    id: 3,
    date: '10.01.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Заголовок новости 3',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
  },
  {
    id: 4,
    date: '10.01.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Заголовок новости 4',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
  },
  {
    id: 5,
    date: '10.01.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Заголовок новости 5',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
  },
  {
    id: 6,
    date: '10.01.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Заголовок новости 6',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
  },
];

export const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockNews.length / itemsPerPage);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">НОВОСТИ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockNews.map((news) => (
            <div key={news.id} className="news-card">
              <img
                src={newsImage}
                alt={news.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="mb-2">
                  <span className="news-date">{news.date}</span>
                  <span className="news-separator"> · </span>
                  <span className="news-type">{news.type}</span>
                </p>
                <h3 className="news-card-title">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                <Link
                  to={`/news/${news.id}`}
                  className="news-link"
                >
                  Подробнее &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md font-medium ${
                currentPage === page
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

