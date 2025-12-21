import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ConsortiumPageSection } from '../components/sections/ConsortiumPageSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';

export const Consortium = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="container mx-auto px-4 mb-6">
          <Breadcrumb items={[{ label: 'Консорциум' }]} />
        </div>

        <div className="container mx-auto h-px bg-[#D9D9D9] mb-5"></div>

        <section className="mb-21">
          <div className="container mx-auto px-4">
            <h1 className="font-onest font-bold text-[40px] leading-none text-left text-black mb-10">Консорциум</h1>
            <ConsortiumPageSection />
          </div>
        </section>

        <ErasmusSection />
      </main>
    </div>
  );
};

