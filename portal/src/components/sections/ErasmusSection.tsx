import { useTranslation } from 'react-i18next';
import HeaderImage from '/HeaderImage.png';
import euroFlag from '/euroFlag.png';
import { Footer } from '../layout/Footer';
import { ContentContainer } from '../ui/ContentContainer';

export const ErasmusSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen max-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={HeaderImage}
          alt="Erasmus"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <ContentContainer variant="container-px4">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="shrink-0">
              <img src={euroFlag} alt="EU Flag" className="w-[20vw] min-w-[200px] h-auto" />
            </div>
            <h2 className="font-onest font-bold text-[40px] leading-[135%] text-white">
              Co-funded by the<br />
              Erasmus+ Programme of<br />
              the European Union
            </h2>
          </div>
          <p className="font-onest font-normal text-lg leading-none text-center text-white max-w-6xl mx-auto">
            {t('sections.erasmusText')}
          </p>
        </ContentContainer>
      </div>
      <div className="absolute bottom-[20px] left-[80px] right-[80px] z-10">
        <Footer />
      </div>
    </section>
  );
};

