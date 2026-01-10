import knuLogo from '/KNU.jpg';
import image2 from '/image 2.png';
import image5 from '/image 5.png';
import image6 from '/image 6.png';
import image8 from '/image 8.png';
import image9 from '/image 9.png';
import image10 from '/image 10.png';
import image17 from '/image 17.png';
import image18 from '/image 18.png';
import engIHSM from '/Eng_IHSM.png';
import logoMNVOiI from '/Logo_МНВОиИ.png';
import mukrLogo from '/МУКР лого.png';
import oshSU from '/OshSU.svg';

export interface ConsortiumMember {
  id: number;
  src: string;
  alt: string;
  name: string;
  height?: 'large' | 'small';
  imageHeight?: 'large' | 'small';
}

export interface ConsortiumLogo {
  id: number;
  src: string;
  alt: string;
}

export const consortiumMembers: ConsortiumMember[] = [
  {
    id: 1,
    src: logoMNVOiI,
    alt: 'Министерство науки, высшего образования и инноваций КР',
    name: 'Министерство науки, высшего образования и инноваций КР',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 2,
    src: image6,
    alt: 'Университет Вильнюса',
    name: 'Университет Вильнюса',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 3,
    src: image8,
    alt: 'Университет Гамбурга',
    name: 'Университет Гамбурга',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 4,
    src: knuLogo,
    alt: 'Кыргызский национальный университет им.Ж.Баласагына',
    name: 'Кыргызский национальный университет им.Ж.Баласагына',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 5,
    src: engIHSM,
    alt: 'Международная высшая школа медицины',
    name: 'Международная высшая школа медицины',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 6,
    src: image5,
    alt: 'Кыргызский государственный технический университет им.И.Раззакова',
    name: 'Кыргызский государственный технический университет им.И.Раззакова',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 7,
    src: oshSU,
    alt: 'Ошский государственный университет',
    name: 'Ошский государственный университет',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 8,
    src: image17,
    alt: 'Иссык-Кульский государственный университет им. К.Тыныстанова',
    name: 'Иссык-Кульский государственный университет им. К.Тыныстанова',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 9,
    src: image18,
    alt: 'Нарынский государственный университет им. С.Нааматова',
    name: 'Нарынский государственный университет им. С.Нааматова',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 10,
    src: image10,
    alt: 'Кыргызской национальный аграрный университет им. Скрябина',
    name: 'Кыргызской национальный аграрный университет им. Скрябина',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 11,
    src: image9,
    alt: 'Европейский центр документации',
    name: 'Европейский центр документации',
    height: 'large',
    imageHeight: 'large'
  },
  {
    id: 12,
    src: mukrLogo,
    alt: 'Международный университет Кыргызской Республики',
    name: 'Международный университет Кыргызской Республики',
    height: 'large',
    imageHeight: 'large'
  },
];

export const consortiumLogos: ConsortiumLogo[] = [
  { id: 1, src: knuLogo, alt: 'KNU' },
  { id: 2, src: image2, alt: 'Partner 2' },
  { id: 3, src: image5, alt: 'Partner 3' },
  { id: 4, src: image6, alt: 'Partner 4' },
  { id: 5, src: image8, alt: 'Partner 5' },
  { id: 6, src: image17, alt: 'Partner 6' },
  { id: 7, src: engIHSM, alt: 'Eng IHSM' },
  { id: 8, src: logoMNVOiI, alt: 'МНВОиИ' },
];

export const workPackagePartners: ConsortiumLogo[] = [
  { id: 1, src: logoMNVOiI, alt: 'Министерство науки, высшего образования и инноваций КР' },
  { id: 2, src: image6, alt: 'Университет Вильнюса' },
  { id: 3, src: image8, alt: 'Университет Гамбурга' },
  { id: 4, src: knuLogo, alt: 'Кыргызский национальный университет им.Ж.Баласагына' },
  { id: 5, src: engIHSM, alt: 'Международная высшая школа медицины' }
];
