import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { ContentContainer } from '../ui/ContentContainer';
import { workPackagePartners } from '../../mocks/consortium';

export const WorkPackagePartnersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-21 bg-[#0052B4] py-12">
      <ContentContainer variant="container-px4">
        <SectionTitle variant="white">{t('workPackage.partners')}</SectionTitle>
        <div className="flex flex-wrap justify-center gap-6">
          {workPackagePartners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-[10px] p-6 flex items-center justify-center h-[140px] w-[140px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_10.9px_3px_rgba(255,255,255,0.7)]">
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

