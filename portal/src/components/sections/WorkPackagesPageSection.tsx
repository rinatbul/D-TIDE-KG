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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-18 gap-x-18 justify-items-center">
      {workPackages.map((wp) => (
        <Link key={wp.id} to={wp.link} className="bg-white w-[31.375rem] h-[26.875rem] rounded-[0.625rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_25.1px_0px_rgba(0,0,0,0.25)] block no-underline">
          <div className="w-full h-[300px] overflow-hidden">
            <img
              src={wp.image}
              alt={wp.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-onest font-bold text-xl leading-none text-black">{wp.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

