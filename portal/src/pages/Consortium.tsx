import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ConsortiumPageSection } from '../components/sections/ConsortiumPageSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';

export const Consortium = () => {
  return (
    <div className="min-h-screen flex flex-col about-page-bg">
      <Header />
      <main className="flex-1 pt-[calc(5vh+109px+24px)]">
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb items={[{ label: 'Консорциум' }]} />
        </div>

        <div className="breadcrumb-divider"></div>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="about-page-title mb-16">Консорциум</h1>
            <ConsortiumPageSection />
          </div>
        </section>

        <ErasmusSection />
      </main>
    </div>
  );
};

