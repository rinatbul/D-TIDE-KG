import { Link } from 'react-router-dom';
import contentPhoto from '/contentPhoto.png';

const workPackages = [
  {
    id: 1,
    title: 'WP1: Управление проектом',
    image: contentPhoto,
    link: '/work-packages/wp1'
  },
  {
    id: 2,
    title: 'WP2: Концептуализация и разработка PhD-платформы',
    image: contentPhoto,
    link: '/work-packages/wp2'
  },
  {
    id: 3,
    title: 'WP3: Пилотирование цифровой среды PhD-программ',
    image: contentPhoto,
    link: '/work-packages/wp3'
  },
  {
    id: 4,
    title: 'WP4: Распространение результатов и интеграция в политику',
    image: contentPhoto,
    link: '/work-packages/wp4'
  }
];

export const WorkPackagesPageSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-18 gap-x-18">
      {workPackages.map((wp) => (
        <div key={wp.id} className="work-package-card">
          <div className="work-package-card-image">
            <img
              src={wp.image}
              alt={wp.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="work-package-card-content">
            <h3 className="work-package-card-title">{wp.title}</h3>
            <Link to={wp.link} className="work-package-card-link">
              Подробнее &gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

