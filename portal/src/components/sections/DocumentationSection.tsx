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
        <h1 className="about-page-title mb-16">Документация</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 documentation-grid mb-8">
          {paginatedDocuments.map((doc) => (
            <div key={doc.id} className="documentation-card">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img src={pdfIcon} alt="PDF" className="documentation-pdf-icon" />
                  </div>
                  <h3 className="documentation-card-title flex-1 min-w-0">{doc.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="documentation-date">{doc.date}</span>
                    <span className="documentation-separator"></span>
                    <span className="documentation-meta">{doc.format}</span>
                    <span className="documentation-separator"></span>
                    <span className="documentation-meta">{doc.size}</span>
                  </div>
                  <button className="documentation-download-btn shrink-0">
                    <span className="documentation-download-text">Скачать</span>
                    <img src={downloadIcon} alt="Скачать" className="documentation-download-icon" />
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

