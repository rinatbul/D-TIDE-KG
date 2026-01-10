import knuLogo from '/KNU.jpg';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import logoMNVOiI from '/Logo_МНВОиИ.png';
import engIHSM from '/Eng_IHSM.png';
import { SectionTitle } from '../ui/SectionTitle';

const partners = [
  { id: 1, src: logoMNVOiI, alt: 'Министерство науки, высшего образования и инноваций КР' },
  { id: 2, src: image6, alt: 'Университет Вильнюса' },
  { id: 3, src: image8, alt: 'Университет Гамбурга' },
  { id: 4, src: knuLogo, alt: 'Кыргызский национальный университет им.Ж.Баласагына' },
  { id: 5, src: engIHSM, alt: 'Международная высшая школа медицины' }
];

export const WorkPackagePartnersSection = () => {
  return (
    <section className="mb-21 bg-[#0052B4] py-12">
      <div className="container mx-auto px-4">
        <SectionTitle variant="white">ОТВЕТСТВЕННЫЕ ПАРТНЕРЫ:</SectionTitle>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-[10px] p-6 flex items-center justify-center h-[140px] w-[140px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_10.9px_3px_rgba(255,255,255,0.7)]">
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

