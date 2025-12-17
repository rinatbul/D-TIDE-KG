import knuLogo from '/KNU.png';
import image2 from '/image 2.png';
import image5 from '/image 5.png';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import image17 from '/image 17.png';
import engIHSM from '/Eng_IHSM 1.png';
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
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">КОНСОРЦИУМ</h2>
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {consortiumLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 bg-white rounded-lg p-6 flex items-center justify-center h-32 w-32"
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

