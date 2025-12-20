import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { DocumentationSection } from '../components/sections/DocumentationSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';

export const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col about-page-bg">
      <Header />
      <main className="flex-1 pt-[calc(5vh+109px+24px)]">
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb items={[{ label: 'Документация' }]} />
        </div>

        <div className="breadcrumb-divider"></div>

        <DocumentationSection />

        <ErasmusSection />
      </main>
    </div>
  );
};

