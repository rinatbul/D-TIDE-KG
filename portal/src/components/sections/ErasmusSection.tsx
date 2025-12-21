import HeaderImage from '/HeaderImage.png';
import euroFlag from '/euroFlag.png';
import { Footer } from '../layout/Footer';

export const ErasmusSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full">
        <img
          src={HeaderImage}
          alt="Erasmus"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="shrink-0">
              <img src={euroFlag} alt="EU Flag" className="w-[20vw] min-w-[200px] h-auto" />
            </div>
            <h2 className="font-onest font-bold text-[40px] leading-[135%] text-black">
              Co-funded by the<br />
              Erasmus+ Programme of<br />
              the European Union
            </h2>
          </div>
          <p className="font-onest font-normal text-lg leading-none text-center text-black max-w-6xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuda tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies. Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[20px] left-0 right-0 z-10">
        <Footer />
      </div>
    </section>
  );
};

