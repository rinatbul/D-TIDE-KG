import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../components/layout/PageLayout';
import { WorkPackageNewsSection } from '../components/sections/WorkPackageNewsSection';
import { WorkPackagePartnersSection } from '../components/sections/WorkPackagePartnersSection';
import { WorkPackageMaterialsSection } from '../components/sections/WorkPackageMaterialsSection';
import contentPhoto from '/contentPhoto.png';
import { workPackagesDetail } from '../mocks/workPackages';

export const WorkPackageDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const workPackage = id ? workPackagesDetail[id] : null;

  if (!workPackage) {
    return (
      <PageLayout>
            <h1>Рабочий пакет не найден</h1>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      breadcrumbItems={[
              { label: t('breadcrumb.workPackages'), path: '/work-packages' },
              { label: workPackage.title }
            ]}
      title={workPackage.title}
      sectionClassName="mb-21 bg-[#F0F0F0]"
      additionalContent={
        <>
          <WorkPackageNewsSection />
          <WorkPackagePartnersSection />
          <WorkPackageMaterialsSection />
        </>
      }
    >
            <div className="font-onest font-normal text-base leading-none text-black">
              {workPackage.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
              <img
                src={contentPhoto}
                alt={workPackage.title}
                className="w-full max-w-full h-auto mt-16 mb-16 rounded-lg"
              />
            </div>
    </PageLayout>
  );
};

