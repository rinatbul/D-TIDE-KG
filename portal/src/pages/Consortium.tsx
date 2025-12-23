import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ConsortiumPageSection } from '../components/sections/ConsortiumPageSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';
import { PageTitle } from '../components/ui/PageTitle';
import { Divider } from '../components/ui/Divider';
import { ContentContainer } from '../components/ui/ContentContainer';

export const Consortium = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="px-[100px]">
          <ContentContainer mb>
            <Breadcrumb items={[{ label: 'Консорциум' }]} />
          </ContentContainer>

          <Divider />

          <section className="mb-21">
            <ContentContainer>
              <PageTitle>Консорциум</PageTitle>
              <ConsortiumPageSection />
            </ContentContainer>
          </section>
        </div>

        <ErasmusSection />
      </main>
    </div>
  );
};

