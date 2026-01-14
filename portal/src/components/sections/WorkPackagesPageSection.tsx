import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { workPackagesList } from '../../mocks/workPackages';

export const WorkPackagesPageSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-18 gap-x-18 justify-items-center">
      {workPackagesList.map((wp) => (
        <Link key={wp.id} to={wp.link || `/work-packages/${wp.id}`} className="bg-white w-125.5 h-107.5 rounded-[0.625rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_25.1px_0px_rgba(0,0,0,0.25)] flex flex-col no-underline">
          <div className="w-full h-[300px] overflow-hidden">
            <img
              src={wp.image}
              alt={wp.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-onest font-bold text-xl leading-none text-black mb-4">{wp.title}</h3>
            <span className="font-onest font-medium text-xs leading-none text-[#0052B4] mt-auto">
              {t('newsCard.readMore')} &gt;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

