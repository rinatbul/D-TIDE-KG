import { useTranslation } from 'react-i18next';
import { PageLayout } from '../components/layout/PageLayout';
import { DocumentationSection } from '../components/sections/DocumentationSection';

export const Documentation = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      breadcrumbItems={[{ label: t('breadcrumb.documentation') }]}
    >
          <DocumentationSection />
    </PageLayout>
  );
};

