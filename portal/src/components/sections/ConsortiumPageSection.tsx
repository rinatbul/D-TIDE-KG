import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import knuLogo from '/KNU.png';
import image2 from '/image 2.png';
import image5 from '/image 5.png';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import image9 from '/image 9.png';
import image10 from '/image 10.png';
import image17 from '/image 17.png';
import image18 from '/image 18.png';
import engIHSM from '/Eng_IHSM 1.png';
import logoMNVOiI from '/Logo_МНВОиИ 1.png';
import mukrLogo from '/МУКР лого.png';

const consortiumMembers = [
  {
    id: 1,
    src: logoMNVOiI,
    alt: 'Министерство науки, высшего образования и инноваций КР',
    name: 'Министерство науки, высшего образования и инноваций КР'
  },
  {
    id: 2,
    src: image6,
    alt: 'Университет Вильнюса',
    name: 'Университет Вильнюса'
  },
  {
    id: 3,
    src: image8,
    alt: 'Университет Гамбурга',
    name: 'Университет Гамбурга'
  },
  {
    id: 4,
    src: knuLogo,
    alt: 'Кыргызский национальный университет им.Ж.Баласагына',
    name: 'Кыргызский национальный университет им.Ж.Баласагына'
  },
  {
    id: 5,
    src: engIHSM,
    alt: 'Международная высшая школа медицины',
    name: 'Международная высшая школа медицины'
  },
  {
    id: 6,
    src: image5,
    alt: 'Кыргызский государственный технический университет им.И.Раззакова',
    name: 'Кыргызский государственный технический университет им.И.Раззакова'
  },
  {
    id: 7,
    src: image2,
    alt: 'Ошский государственный университет',
    name: 'Ошский государственный университет'
  },
  {
    id: 8,
    src: image17,
    alt: 'Иссык-Кульский государственный университет им. К.Тыныстанова',
    name: 'Иссык-Кульский государственный университет им. К.Тыныстанова'
  },
  {
    id: 9,
    src: image18,
    alt: 'Нарынский государственный университет им. С.Нааматова',
    name: 'Нарынский государственный университет им. С.Нааматова'
  },
  {
    id: 10,
    src: image10,
    alt: 'Кыргызской национальный аграрный университет им. Скрябина',
    name: 'Кыргызской национальный аграрный университет им. Скрябина'
  },
  {
    id: 11,
    src: image9,
    alt: 'Европейский центр документации',
    name: 'Европейский центр документации'
  },
  {
    id: 12,
    src: mukrLogo,
    alt: 'Международный университет Кыргызской Республики',
    name: 'Международный университет Кыргызской Республики'
  },
];

export const ConsortiumPageSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(consortiumMembers.length / itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 mb-8 justify-items-center">
        {consortiumMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((member) => (
          <div
            key={member.id}
            className="consortium-page-card"
          >
            <div className="consortium-page-card-logo">
              <img
                src={member.src}
                alt={member.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="consortium-page-card-text">{member.name}</p>
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
    </>
  );
};

