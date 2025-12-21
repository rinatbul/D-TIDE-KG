import HeaderImage from '/HeaderImage.png';
import euroFlag from '/euroFlag.png';

export const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full">
        <img
          src={HeaderImage}
          alt="Hero"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none top-auto bottom-[50vh]">
        <div className="text-center px-4">
          <h1 className="font-onest font-bold text-[70px] leading-none text-center text-white mb-4">D-TIDE-KG</h1>
          <p className="font-onest font-semibold text-[45px] leading-[130%] text-center capitalize text-white">
            Цифровая Трансформация<br />
            Докторского Образования
          </p>
        </div>
      </div>
      <div className="absolute bottom-[15vh] right-[9vw] z-10 w-[379px] h-[117px] bg-white rounded-[4px] p-0 flex items-center pointer-events-auto">
        <div className="flex items-center justify-center h-full p-2 shrink-0">
            <img src={euroFlag} alt="EU Flag" className="h-full w-auto" />
          </div>
        <span className="font-nunito font-bold text-lg leading-[135%] text-[#003399] px-4 flex-1">
            Co-funded by the Erasmus+ Programme of the European Union
          </span>
      </div>
    </section>
  );
};

