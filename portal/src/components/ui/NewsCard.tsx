import { Link } from 'react-router-dom';
import newsImage from '/news.png';

export interface NewsItem {
  id: number;
  date: string;
  type: string;
  title: string;
  excerpt: string;
}

interface NewsCardProps {
  news: NewsItem;
  variant?: 'link' | 'div';
  showReadMore?: boolean;
  readMoreColor?: 'blue' | 'green';
  dateSeparator?: string;
  hoverEffect?: 'translate' | 'shadow';
}

export const NewsCard = ({
  news,
  variant = 'link',
  showReadMore = false,
  readMoreColor = 'blue',
  hoverEffect = 'translate',
}: NewsCardProps) => {
  const baseClasses = 'bg-white rounded-[10px] border border-gray-border overflow-hidden transition-all duration-300 block no-underline';
  
  const hoverClasses = hoverEffect === 'translate' 
    ? 'hover:-translate-y-1 hover:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]'
    : 'hover:shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)]';

  const readMoreColorClass = readMoreColor === 'blue' 
    ? 'text-[#0052B4]' 
    : 'text-green-primary';

  const cardContent = (
    <>
      <img
        src={newsImage}
        alt={news.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="mb-2 flex items-center gap-1.5">
          <span className="font-onest font-normal text-[10px] leading-none text-[#D80027]">{news.date}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-[#919EAB] opacity-100"></span>
          <span className="font-onest font-medium text-[10px] leading-none uppercase text-black">{news.type}</span>
        </p>
        <h3 className="font-onest font-semibold text-xl leading-none text-black mb-2 transition-colors duration-300 group-hover:text-[#0052B4]">{news.title}</h3>
        <p className={`text-gray-600 text-sm ${showReadMore ? 'mb-4' : ''}`}>{news.excerpt}</p>
        {showReadMore && (
          variant === 'link' ? (
            <span className={`font-onest font-medium text-xs leading-none ${readMoreColorClass}`}>
              Подробнее &gt;
            </span>
          ) : (
            <Link
              to={`/news/${news.id}`}
              className={`font-onest font-medium text-xs leading-none ${readMoreColorClass} no-underline`}
            >
              Подробнее &gt;
            </Link>
          )
        )}
      </div>
    </>
  );

  if (variant === 'link') {
    return (
      <Link
        to={`/news/${news.id}`}
        className={`group ${baseClasses} ${hoverClasses}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={`group ${baseClasses} ${hoverClasses}`}>
      {cardContent}
    </div>
  );
};

