import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';
import instagramIcon from '/Instagram.png';
import facebookIcon from '/Facebook.png';
import youtubeIcon from '/YouTube.png';

export const Footer = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `font-onest font-medium text-base leading-none uppercase text-black no-underline transition-all duration-300 hover:text-blue-secondary ${isActive ? 'font-bold text-blue-secondary' : ''}`;
  };

  return (
    <footer className="w-full flex justify-center">
      <div className="container mx-auto bg-white rounded-[10px] opacity-100 shadow-[0_2px_8px_rgba(0,0,0,0.1)] py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="D-TIDE-KG" className="w-[5vw] min-w-[70px] h-auto" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link to="/" className={getLinkClass('/')}>
              ГЛАВНАЯ
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              О ПРОЕКТЕ
            </Link>
            <Link to="/consortium" className={getLinkClass('/consortium')}>
              КОНСОРЦИУМ
            </Link>
            <Link to="/work-packages" className={getLinkClass('/work-packages')}>
              РАБОЧИЕ ПАКЕТЫ
            </Link>
            <Link to="/documentation" className={getLinkClass('/documentation')}>
              ДОКУМЕНТАЦИЯ
            </Link>
            <Link to="/news" className={getLinkClass('/news')}>
              НОВОСТИ
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
            © 2025 D-TIDE-KG. Сайт не является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
};

