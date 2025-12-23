import { useEffect, useRef } from 'react';
import knuLogo from '/KNU.jpg';
import image2 from '/image 2.png';
import image5 from '/image 5.png';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import image17 from '/image 17.png';
import engIHSM from '/Eng_IHSM.png';
import logoMNVOiI from '/Logo_МНВОиИ 1.png';

const consortiumLogos = [
  { id: 1, src: knuLogo, alt: 'KNU' },
  { id: 2, src: image2, alt: 'Partner 2' },
  { id: 3, src: image5, alt: 'Partner 3' },
  { id: 4, src: image6, alt: 'Partner 4' },
  { id: 5, src: image8, alt: 'Partner 5' },
  { id: 6, src: image17, alt: 'Partner 6' },
  { id: 7, src: engIHSM, alt: 'Eng IHSM' },
  { id: 8, src: logoMNVOiI, alt: 'МНВОиИ' },
];

export const ConsortiumSection = () => {
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
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="font-onest font-semibold text-[36px] leading-none uppercase text-center text-white mb-12">КОНСОРЦИУМ</h2>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden overflow-y-visible py-6"
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
      </div>
    </section>
  );
};

