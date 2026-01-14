import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import pdfIcon from '/PDF.png';
import downloadIcon from '/Download.png';
import { Pagination } from '../ui/Pagination';
import { PageTitle } from '../ui/PageTitle';
import { ContentContainer } from '../ui/ContentContainer';
import { mockDocuments } from '../../mocks/documents';

export const DocumentationSection = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(mockDocuments.length / itemsPerPage);

  const paginatedDocuments = mockDocuments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="mb-21">
      <ContentContainer variant="screen-2xl-px4">
        <PageTitle>{t('documentation.title')}</PageTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[6.125rem] gap-y-7 mb-8">
          {paginatedDocuments.map((doc) => (
            <div key={doc.id} className="bg-white border border-gray-text rounded-[10px] py-[15px] px-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img src={pdfIcon} alt="PDF" className="w-[51px] h-[51px] object-contain" />
                  </div>
                  <h3 className="font-onest font-normal text-base leading-[140%] text-black mb-2 flex-1 min-w-0">{doc.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-onest font-normal text-[10px] leading-none text-[#D80027]">{doc.date}</span>
                    <span className="w-0.5 h-0.5 bg-[#919EAB] rounded-full flex-shrink-0 opacity-100"></span>
                    <span className="font-onest font-medium text-[10px] leading-none text-center uppercase text-black">{doc.format}</span>
                    <span className="w-0.5 h-0.5 bg-[#919EAB] rounded-full flex-shrink-0 opacity-100"></span>
                    <span className="font-onest font-medium text-[10px] leading-none text-center uppercase text-black">{doc.size}</span>
                  </div>
                  <button className="flex flex-row items-center gap-1 bg-none border-none cursor-pointer transition-opacity duration-300 hover:opacity-70 p-1 shrink-0">
                    <span className="font-onest font-medium text-[10px] leading-none text-blue-secondary">{t('documentation.download')}</span>
                    <img src={downloadIcon} alt={t('documentation.download')} className="w-5 h-5 object-contain" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          variant="news"
        />
      </ContentContainer>
    </section>
  );
};

