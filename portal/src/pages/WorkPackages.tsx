import { PageLayout } from '../components/layout/PageLayout';
import { WorkPackagesPageSection } from '../components/sections/WorkPackagesPageSection';

export const WorkPackages = () => {
  return (
    <PageLayout
      breadcrumbItems={[{ label: 'Рабочие пакеты' }]}
      title="Рабочие пакеты"
    >
              <WorkPackagesPageSection />
    </PageLayout>
  );
};

