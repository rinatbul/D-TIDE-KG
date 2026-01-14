import { useTranslation } from 'react-i18next';
import { PageLayout } from '../components/layout/PageLayout';
import { WorkPackagesPageSection } from '../components/sections/WorkPackagesPageSection';

export const WorkPackages = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      breadcrumbItems={[{ label: t('breadcrumb.workPackages') }]}
      title={t('pages.workPackages')}
    >
              <WorkPackagesPageSection />
    </PageLayout>
  );
};

