import { useTranslation } from 'react-i18next';

export const useBreadcrumb = () => {
  const { t } = useTranslation();

  const getBreadcrumbLabel = (key: string): string => {
    return t(`breadcrumb.${key}`);
  };

  return { getBreadcrumbLabel };
};

