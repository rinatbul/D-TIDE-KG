import knuLogo from '/KNU.png';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import logoMNVOiI from '/Logo_МНВОиИ 1.png';
import engIHSM from '/Eng_IHSM 1.png';

const partners = [
  { id: 1, src: logoMNVOiI, alt: 'Министерство науки, высшего образования и инноваций КР' },
  { id: 2, src: image6, alt: 'Университет Вильнюса' },
  { id: 3, src: image8, alt: 'Университет Гамбурга' },
  { id: 4, src: knuLogo, alt: 'Кыргызский национальный университет им.Ж.Баласагына' },
  { id: 5, src: engIHSM, alt: 'Международная высшая школа медицины' }
];

export const WorkPackagePartnersSection = () => {
  return (
    <section className="py-16 work-package-partners-section">
      <div className="container mx-auto px-4">
        <h2 className="work-package-partners-title mb-12">ОТВЕТСТВЕННЫЕ ПАРТНЕРЫ:</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="work-package-partner-card">
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

