import { useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { WorkPackageNewsSection } from '../components/sections/WorkPackageNewsSection';
import { WorkPackagePartnersSection } from '../components/sections/WorkPackagePartnersSection';
import { WorkPackageMaterialsSection } from '../components/sections/WorkPackageMaterialsSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';
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
      <div className="min-h-screen flex flex-col about-page-bg">
        <Header />
        <main className="flex-1 pt-[calc(5vh+109px+24px)]">
          <div className="container mx-auto px-4">
            <h1>Рабочий пакет не найден</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col about-page-bg">
      <Header />
      <main className="flex-1 pt-[calc(5vh+109px+24px)]">
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb
            items={[
              { label: 'Рабочие пакеты', path: '/work-packages' },
              { label: workPackage.title }
            ]}
          />
        </div>

        <div className="breadcrumb-divider"></div>

        <section className="py-8 about-page-bg">
          <div className="container mx-auto px-4">
            <h1 className="about-page-title mb-8">{workPackage.title}</h1>
            <div className="work-package-content">
              {workPackage.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
              <img
                src={contentPhoto}
                alt={workPackage.title}
                className="work-package-content-image"
              />
            </div>
          </div>
        </section>

        <WorkPackageNewsSection />
        <WorkPackagePartnersSection />
        <WorkPackageMaterialsSection />
        <ErasmusSection />
      </main>
    </div>
  );
};

