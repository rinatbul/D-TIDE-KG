import HeaderImage from '/HeaderImage.png';
import euroFlag from '/euroFlag.png';

export const ErasmusSection = () => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeaderImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 flex items-center gap-8">
        <div className="flex-shrink-0">
          <img src={euroFlag} alt="EU Flag" className="h-32 w-auto" />
        </div>
        <div className="flex-1 text-white">
          <p className="text-2xl md:text-3xl font-bold mb-6">
            Co-funded by the Erasmus+ Programme of the European Union
          </p>
          <p className="text-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

