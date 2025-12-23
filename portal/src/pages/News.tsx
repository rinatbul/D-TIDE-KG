import { PageLayout } from '../components/layout/PageLayout';
import { NewsPageSection } from '../components/sections/NewsPageSection';

export const News = () => {
  return (
    <PageLayout
      breadcrumbItems={[{ label: 'Новости' }]}
      title="Новости"
    >
              <NewsPageSection />
    </PageLayout>
  );
};

