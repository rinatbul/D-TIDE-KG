import { useTranslation } from 'react-i18next';
import { PageLayout } from '../components/layout/PageLayout';
import { ConsortiumPageSection } from '../components/sections/ConsortiumPageSection';

export const Consortium = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      breadcrumbItems={[{ label: t('breadcrumb.consortium') }]}
      title={t('pages.consortium')}
    >
              <ConsortiumPageSection />
    </PageLayout>
  );
};

