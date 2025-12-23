import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { DocumentationSection } from '../components/sections/DocumentationSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';
import { Divider } from '../components/ui/Divider';
import { ContentContainer } from '../components/ui/ContentContainer';

export const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="px-[100px]">
          <ContentContainer mb>
            <Breadcrumb items={[{ label: 'Документация' }]} />
          </ContentContainer>

          <Divider />

          <DocumentationSection />
        </div>

        <ErasmusSection />
      </main>
    </div>
  );
};

