import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { ContentContainer } from '../ui/ContentContainer';
import { consortiumLogos } from '../../mocks/consortium';

export const ConsortiumSection = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPositionRef.current += scrollSpeed;
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const duplicatedLogos = [...consortiumLogos, ...consortiumLogos];

  return (
    <section className="bg-[#0052B4] pt-21 pb-15">
      <ContentContainer variant="screen-2xl-px4">
        <SectionTitle variant="white">{t('sections.consortium')}</SectionTitle>
      </ContentContainer>
        <div
          ref={scrollRef}
        className="flex gap-8 overflow-x-hidden overflow-y-visible py-6 px-4"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="shrink-0 bg-white rounded-[10px] p-6 flex items-center justify-center h-[140px] w-[140px] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10.9px_3px_rgba(255,255,255,0.7)]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

