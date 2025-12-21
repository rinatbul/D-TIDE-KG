import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pdfIcon from '/PDF.png';
import downloadIcon from '/Download.png';

interface Document {
  id: number;
  title: string;
  date: string;
  format: string;
  size: string;
  url?: string;
}

const mockDocuments: Document[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: `${10 + (i % 20)}.${(i % 12) + 1}.2025`,
  format: 'PDF',
  size: '2MB',
}));

export const DocumentationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(mockDocuments.length / itemsPerPage);

  const paginatedDocuments = mockDocuments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-onest font-bold text-[40px] leading-none text-left text-black mb-16">Документация</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[6.125rem] gap-y-7 mb-8">
          {paginatedDocuments.map((doc) => (
            <div key={doc.id} className="bg-white border border-gray-text rounded-[10px] py-[15px] px-5 transition-shadow duration-300 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img src={pdfIcon} alt="PDF" className="w-[51px] h-[51px] object-contain" />
                  </div>
                  <h3 className="font-onest font-normal text-base leading-[140%] text-black mb-2 flex-1 min-w-0">{doc.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-onest font-normal text-[10px] leading-none text-red-primary">{doc.date}</span>
                    <span className="w-0.5 h-0.5 bg-gray-text rounded-full flex-shrink-0"></span>
                    <span className="font-onest font-medium text-[10px] leading-none text-center uppercase text-black">{doc.format}</span>
                    <span className="w-0.5 h-0.5 bg-gray-text rounded-full flex-shrink-0"></span>
                    <span className="font-onest font-medium text-[10px] leading-none text-center uppercase text-black">{doc.size}</span>
                  </div>
                  <button className="flex flex-row items-center gap-1 bg-none border-none cursor-pointer transition-opacity duration-300 hover:opacity-70 p-1 shrink-0">
                    <span className="font-onest font-medium text-[10px] leading-none text-blue-secondary">Скачать</span>
                    <img src={downloadIcon} alt="Скачать" className="w-5 h-5 object-contain" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-gray-text text-white opacity-30 transition-colors duration-300 hover:text-blue-primary disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${currentPage === 1 ? 'bg-green-secondary opacity-30' : 'bg-gray-text opacity-30'} text-black transition-all duration-300 hover:bg-green-secondary`}
          >
            1
          </button>
          
          {currentPage > 3 && totalPages > 4 && (
            <span className="w-8 h-8 flex items-center justify-center font-onest font-medium text-sm text-gray-text">...</span>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => page !== 1 && page !== totalPages && Math.abs(page - currentPage) <= 1)
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${currentPage === page ? 'bg-green-secondary opacity-30' : 'bg-gray-text opacity-30'} text-black transition-all duration-300 hover:bg-green-secondary`}
              >
                {page}
              </button>
            ))}
          
          {currentPage < totalPages - 2 && totalPages > 4 && (
            <span className="w-8 h-8 flex items-center justify-center font-onest font-medium text-sm text-gray-text">...</span>
          )}
          
          {totalPages > 1 && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-[3px] font-onest font-medium text-sm ${currentPage === totalPages ? 'bg-green-secondary opacity-30' : 'bg-gray-text opacity-30'} text-black transition-all duration-300 hover:bg-green-secondary`}
            >
              {totalPages}
            </button>
          )}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-gray-text text-white opacity-30 transition-colors duration-300 hover:text-blue-primary disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

