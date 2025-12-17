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
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none hero-text-container">
        <div className="text-center px-4">
          <h1 className="hero-title mb-4">D-TIDE-KG</h1>
          <p className="hero-subtitle">
            Цифровая Трансформация<br />
            Докторского Образования
          </p>
        </div>
      </div>
      <div className="absolute erasmus-banner-position z-10 erasmus-banner pointer-events-auto">
        <div className="flex items-center h-full">
          <div className="flex-shrink-0 erasmus-flag-container">
            <img src={euroFlag} alt="EU Flag" className="h-full w-auto" />
          </div>
          <span className="erasmus-text">
            Co-funded by the Erasmus+ Programme of the European Union
          </span>
        </div>
      </div>
    </section>
  );
};

