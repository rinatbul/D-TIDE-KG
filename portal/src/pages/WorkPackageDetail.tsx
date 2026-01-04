import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { WorkPackageNewsSection } from '../components/sections/WorkPackageNewsSection';
import { WorkPackagePartnersSection } from '../components/sections/WorkPackagePartnersSection';
import { WorkPackageMaterialsSection } from '../components/sections/WorkPackageMaterialsSection';
import contentPhoto from '/contentPhoto.png';

const workPackages = {
  wp1: {
    id: 'wp1',
    title: 'WP1: Управление проектом',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuada tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies.

Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.`
  },
  wp2: {
    id: 'wp2',
    title: 'WP2: Концептуализация и разработка PhD-платформы',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus.`
  },
  wp3: {
    id: 'wp3',
    title: 'WP3: Пилотирование цифровой среды PhD-программ',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam.`
  },
  wp4: {
    id: 'wp4',
    title: 'WP4: Распространение результатов и интеграция в политику',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor.`
  }
};

export const WorkPackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const workPackage = id ? workPackages[id as keyof typeof workPackages] : null;

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
              { label: 'Рабочие пакеты', path: '/work-packages' },
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

