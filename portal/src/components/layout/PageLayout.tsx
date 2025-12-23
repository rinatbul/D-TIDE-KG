import { Header } from './Header';
import { Breadcrumb } from './Breadcrumb';
import { ErasmusSection } from '../sections/ErasmusSection';
import { PageTitle } from '../ui/PageTitle';
import { Divider } from '../ui/Divider';
import { ContentContainer } from '../ui/ContentContainer';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
  title?: string;
  titleMb?: '4' | '10';
  showDivider?: boolean;
  container?: 'default' | 'container';
  usePadding?: boolean;
  sectionClassName?: string;
  additionalContent?: React.ReactNode;
}

export const PageLayout = ({
  children,
  breadcrumbItems,
  title,
  titleMb = '10',
  showDivider = true,
  container = 'default',
  usePadding = true,
  sectionClassName = 'mb-21',
  additionalContent,
}: PageLayoutProps) => {
  const mainContent = (
    <>
      {breadcrumbItems && (
        <ContentContainer container={container} mb>
          <Breadcrumb items={breadcrumbItems} />
        </ContentContainer>
      )}

      {showDivider && <Divider container={container} />}

      {title ? (
        <section className={sectionClassName}>
          <ContentContainer container={container}>
            <PageTitle mb={titleMb}>{title}</PageTitle>
            {children}
          </ContentContainer>
        </section>
      ) : (
        children
      )}

      {additionalContent}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        {usePadding ? (
          <div className="px-[100px]">
            {mainContent}
          </div>
        ) : (
          mainContent
        )}
        <ErasmusSection />
      </main>
    </div>
  );
};

