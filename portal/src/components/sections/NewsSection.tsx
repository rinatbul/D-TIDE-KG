import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import newsImage from '/news.png';

interface NewsItem {
  id: number;
  date: string;
  type: string;
  title: string;
  excerpt: string;
}

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">НОВОСТИ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((news) => (
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
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="pagination-arrow"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setCurrentPage(1)}
            className={`pagination-btn ${currentPage === 1 ? 'pagination-btn-active' : ''}`}
          >
            1
          </button>
          
          {currentPage > 3 && totalPages > 4 && (
            <span className="pagination-dots">...</span>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => page !== 1 && page !== totalPages && Math.abs(page - currentPage) <= 1)
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`pagination-btn ${currentPage === page ? 'pagination-btn-active' : ''}`}
              >
                {page}
              </button>
            ))}
          
          {currentPage < totalPages - 2 && totalPages > 4 && (
            <span className="pagination-dots">...</span>
          )}
          
          {totalPages > 1 && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`pagination-btn ${currentPage === totalPages ? 'pagination-btn-active' : ''}`}
            >
              {totalPages}
            </button>
          )}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="pagination-arrow"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

