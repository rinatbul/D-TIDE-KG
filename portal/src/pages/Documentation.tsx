import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { DocumentationSection } from '../components/sections/DocumentationSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';

export const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="container mx-auto px-4 mb-6">
          <Breadcrumb items={[{ label: 'Документация' }]} />
        </div>

        <div className="container mx-auto h-px bg-[#D9D9D9] mb-5"></div>

        <DocumentationSection />

        <ErasmusSection />
      </main>
    </div>
  );
};

