import { PageLayout } from '../components/layout/PageLayout';
import { ConsortiumPageSection } from '../components/sections/ConsortiumPageSection';

export const Consortium = () => {
  return (
    <PageLayout
      breadcrumbItems={[{ label: 'Консорциум' }]}
      title="Консорциум"
    >
              <ConsortiumPageSection />
    </PageLayout>
  );
};

