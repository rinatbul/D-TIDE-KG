import knuLogo from '/KNU.png';
import image2 from '/image 2.png';
import image5 from '/image 5.png';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import image9 from '/image 9.png';
import image10 from '/image 10.png';
import image17 from '/image 17.png';
import image18 from '/image 18.png';
import engIHSM from '/Eng_IHSM 1.png';
import logoMNVOiI from '/Logo_МНВОиИ 1.png';
import mukrLogo from '/МУКР лого.png';

const consortiumMembers = [
  {
    id: 1,
    src: logoMNVOiI,
    alt: 'Министерство науки, высшего образования и инноваций КР',
    name: 'Министерство науки, высшего образования и инноваций КР'
  },
  {
    id: 2,
    src: image6,
    alt: 'Университет Вильнюса',
    name: 'Университет Вильнюса'
  },
  {
    id: 3,
    src: image8,
    alt: 'Университет Гамбурга',
    name: 'Университет Гамбурга'
  },
  {
    id: 4,
    src: knuLogo,
    alt: 'Кыргызский национальный университет им.Ж.Баласагына',
    name: 'Кыргызский национальный университет им.Ж.Баласагына'
  },
  {
    id: 5,
    src: engIHSM,
    alt: 'Международная высшая школа медицины',
    name: 'Международная высшая школа медицины'
  },
  {
    id: 6,
    src: image5,
    alt: 'Кыргызский государственный технический университет им.И.Раззакова',
    name: 'Кыргызский государственный технический университет им.И.Раззакова'
  },
  {
    id: 7,
    src: image2,
    alt: 'Ошский государственный университет',
    name: 'Ошский государственный университет'
  },
  {
    id: 8,
    src: image17,
    alt: 'Иссык-Кульский государственный университет им. К.Тыныстанова',
    name: 'Иссык-Кульский государственный университет им. К.Тыныстанова'
  },
  {
    id: 9,
    src: image18,
    alt: 'Нарынский государственный университет им. С.Нааматова',
    name: 'Нарынский государственный университет им. С.Нааматова'
  },
  {
    id: 10,
    src: image10,
    alt: 'Кыргызской национальный аграрный университет им. Скрябина',
    name: 'Кыргызской национальный аграрный университет им. Скрябина'
  },
  {
    id: 11,
    src: image9,
    alt: 'Европейский центр документации',
    name: 'Европейский центр документации'
  },
  {
    id: 12,
    src: mukrLogo,
    alt: 'Международный университет Кыргызской Республики',
    name: 'Международный университет Кыргызской Республики'
  },
];

export const ConsortiumPageSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 justify-items-center">
      {consortiumMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg p-6 flex flex-col items-center justify-center gap-4 w-full max-w-[341px] h-[334px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_25.1px_0px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center justify-center h-[100px] w-full mb-2">
              <img
                src={member.src}
                alt={member.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="font-onest font-medium text-xl leading-none text-center text-black m-0">{member.name}</p>
          </div>
      ))}
    </div>
  );
};

