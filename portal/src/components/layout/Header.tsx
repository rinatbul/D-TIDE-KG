import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '/logo.png';
import russiaFlag from '/russia.png';
import usFlag from '/us.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('Русский');
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const currentFlag = currentLang === 'Русский' ? russiaFlag : usFlag;

  const getNavClass = (path: string) => {
    const isActive = location.pathname === path;
    return `nav-link ${isActive ? 'nav-link-active' : ''}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
<header className={`fixed z-50 w-full top-[10vh] pointer-events-none`}>
      <div className="w-full flex justify-center">
        <div className="header-container flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="D-TIDE-KG" className="h-12 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className={getNavClass('/')}>
              ГЛАВНАЯ
            </Link>
            <Link to="/about" className={getNavClass('/about')}>
              О ПРОЕКТЕ
            </Link>
            <Link to="/consortium" className={getNavClass('/consortium')}>
              КОНСОРЦИУМ
            </Link>
            <Link to="/work-packages" className={getNavClass('/work-packages')}>
              РАБОЧИЕ ПАКЕТЫ
            </Link>
            <Link to="/documentation" className={getNavClass('/documentation')}>
              ДОКУМЕНТАЦИЯ
            </Link>
            <Link to="/news" className={getNavClass('/news')}>
              НОВОСТИ
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
              />
            </div>
            <div className="relative" ref={langRef}>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <img src={currentFlag} alt={currentLang} style={{ width: '17px', height: '17px' }} />
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[150px] z-50">
                  <button
                    onClick={() => {
                      setCurrentLang('Русский');
                      setIsLangOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <img src={russiaFlag} alt="RU" style={{ width: '17px', height: '17px' }} />
                    Русский
                  </button>
                  <button
                    onClick={() => {
                      setCurrentLang('English');
                      setIsLangOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <img src={usFlag} alt="EN" style={{ width: '17px', height: '17px' }} />
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden w-full flex justify-center">
          <div className="header-container border-t border-gray-200">
            <nav className="py-4 flex flex-col gap-4 px-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={getNavClass('/')}>
              ГЛАВНАЯ
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={getNavClass('/about')}>
              О ПРОЕКТЕ
            </Link>
            <Link to="/consortium" onClick={() => setIsMenuOpen(false)} className={getNavClass('/consortium')}>
              КОНСОРЦИУМ
            </Link>
            <Link to="/work-packages" onClick={() => setIsMenuOpen(false)} className={getNavClass('/work-packages')}>
              РАБОЧИЕ ПАКЕТЫ
            </Link>
            <Link to="/documentation" onClick={() => setIsMenuOpen(false)} className={getNavClass('/documentation')}>
              ДОКУМЕНТАЦИЯ
            </Link>
            <Link to="/news" onClick={() => setIsMenuOpen(false)} className={getNavClass('/news')}>
              НОВОСТИ
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  <img src={currentFlag} alt={currentLang} style={{ width: '17px', height: '17px' }} />
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLangOpen && (
                  <div className="mt-2 bg-white border border-gray-200 rounded-md py-2">
                    <button
                      onClick={() => {
                        setCurrentLang('Русский');
                        setIsLangOpen(false);
                      }}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <img src={russiaFlag} alt="RU" style={{ width: '17px', height: '17px' }} />
                      Русский
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLang('English');
                        setIsLangOpen(false);
                      }}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <img src={usFlag} alt="EN" style={{ width: '17px', height: '17px' }} />
                      English
                    </button>
                  </div>
                )}
              </div>
            </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

