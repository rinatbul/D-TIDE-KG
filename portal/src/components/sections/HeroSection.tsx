import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import euroFlag from '/euroFlag.png';
import HeaderImage from '/HeaderImage.png';
import { api, type HeroSectionData } from '../../lib/api';

export const HeroSection = () => {
  const queryClient = useQueryClient();
  
  const { data, isLoading } = useQuery<HeroSectionData>({
    queryKey: ['heroSection'],
    queryFn: () => api.get<HeroSectionData>('/api/hero-section'),
    staleTime: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: ['heroSection'] });
    }, 30000);

    return () => clearInterval(interval);
  }, [queryClient]);

  if (isLoading) {
    return (
      <section className="relative w-full h-screen max-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={HeaderImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    );
  }

  const heroData = data || {
    title: 'D-TIDE-KG',
    subtitle: 'Цифровая Трансформация\nДокторского Образования',
    backgroundImage: '/HeaderImage.png',
    erasmusText: 'Co-funded by the Erasmus+ Programme of the European Union',
  };

  const backgroundImage = heroData.backgroundImage.startsWith('/')
    ? heroData.backgroundImage
    : `/HeaderImage.png`;

  const subtitleLines = heroData.subtitle.split('\n');

  return (
    <section className="relative w-full h-screen max-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={backgroundImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none top-auto bottom-[35vh]">
        <div className="text-center px-4">
          <h1 className="font-onest font-bold text-[70px] leading-none text-center text-white mb-4">
            {heroData.title}
          </h1>
          <p className="font-onest font-semibold text-[45px] leading-[130%] text-center capitalize text-white">
            {subtitleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < subtitleLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="absolute bottom-[8vh] right-[9vw] z-10 w-[379px] h-[117px] bg-white rounded-[4px] p-0 flex items-center pointer-events-auto">
        <div className="flex items-center justify-center h-full p-2 shrink-0">
          <img src={euroFlag} alt="EU Flag" className="h-full w-auto" />
        </div>
        <span className="font-nunito font-bold text-lg leading-[135%] text-[#003399] px-4 flex-1">
          {heroData.erasmusText}
        </span>
      </div>
    </section>
  );
};

