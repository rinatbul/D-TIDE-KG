import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '/logo.png';
import instagramIcon from '/Instagram.png';
import facebookIcon from '/Facebook.png';
import youtubeIcon from '/YouTube.png';

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `font-onest font-medium text-base leading-none uppercase no-underline transition-colors duration-300 ${isActive ? 'text-[#0072C6] underline underline-offset-[4px] decoration-solid decoration-2' : 'text-black hover:text-[#0072C6]'}`;
  };

  return (
    <footer className="w-full flex justify-center">
      <div className="container mx-auto bg-white rounded-[10px] opacity-100 shadow-[0_2px_8px_rgba(0,0,0,0.1)] py-2 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="D-TIDE-KG" className="w-[5vw] min-w-[70px] h-auto" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link to="/" className={getLinkClass('/')}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              {t('nav.about')}
            </Link>
            <Link to="/consortium" className={getLinkClass('/consortium')}>
              {t('nav.consortium')}
            </Link>
            <Link to="/work-packages" className={getLinkClass('/work-packages')}>
              {t('nav.workPackages')}
            </Link>
            <Link to="/documentation" className={getLinkClass('/documentation')}>
              {t('nav.documentation')}
            </Link>
            <Link to="/news" className={getLinkClass('/news')}>
              {t('nav.news')}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" style={{ width: '41px', height: '41px' }} />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" style={{ width: '34px', height: '34px' }} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="font-onest font-normal text-lg leading-none text-black text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

