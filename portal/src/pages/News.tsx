import { useTranslation } from 'react-i18next';
import { PageLayout } from '../components/layout/PageLayout';
import { NewsPageSection } from '../components/sections/NewsPageSection';

export const News = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      breadcrumbItems={[{ label: t('breadcrumb.news') }]}
      title={t('pages.news')}
    >
              <NewsPageSection />
    </PageLayout>
  );
};

