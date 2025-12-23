import { PageLayout } from '../components/layout/PageLayout';
import { DocumentationSection } from '../components/sections/DocumentationSection';

export const Documentation = () => {
  return (
    <PageLayout
      breadcrumbItems={[{ label: 'Документация' }]}
    >
          <DocumentationSection />
    </PageLayout>
  );
};

