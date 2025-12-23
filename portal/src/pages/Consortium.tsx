import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ConsortiumPageSection } from '../components/sections/ConsortiumPageSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';
import { PageTitle } from '../components/ui/PageTitle';

export const Consortium = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="px-[100px]">
          <div className="max-w-screen-2xl mx-auto px-4 mb-6">
            <Breadcrumb items={[{ label: 'Консорциум' }]} />
          </div>

          <div className="max-w-screen-2xl mx-auto h-px bg-[#D9D9D9] mb-5"></div>

          <section className="mb-21">
            <div className="max-w-screen-2xl mx-auto px-4">
              <PageTitle>Консорциум</PageTitle>
              <ConsortiumPageSection />
            </div>
          </section>
        </div>

        <ErasmusSection />
      </main>
    </div>
  );
};

