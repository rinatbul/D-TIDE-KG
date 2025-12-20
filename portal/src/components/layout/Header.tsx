import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '/logo.png';
import russiaFlag from '/russia.png';
import usFlag from '/united states.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('Русский');
  const [isScrolled, setIsScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

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
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    handleScroll();

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed z-50 w-full ${isScrolled ? 'top-0' : 'top-[5vh]'} pointer-events-none transition-top duration-300`}>
      <div className={`w-full ${isScrolled ? 'flex' : 'flex justify-center'}`}>
        <div className={`header-container ${isScrolled ? 'header-container-scrolled' : ''} flex items-center justify-between pointer-events-auto`}>
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
            <div className="relative w-24" ref={searchRef}>
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Поиск..."
                    className="py-1 focus:outline-none flex-1 bg-transparent text-gray-700 min-w-0"
                  />
                  <button
                    onClick={toggleSearch}
                    className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="flex items-center gap-2 py-1"
                >
                  <Search className="w-4 h-4 text-gray-500" />
                  <span className="search-text">Поиск</span>
                </button>
              )}
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
        <div className={`lg:hidden w-full ${isScrolled ? 'flex' : 'flex justify-center'}`}>
          <div className={`header-container ${isScrolled ? 'header-container-scrolled' : ''} border-t border-gray-200`}>
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
                {isSearchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Поиск"
                      className="flex-1 px-3 py-2 focus:outline-none bg-transparent"
                    />
                    <button
                      onClick={toggleSearch}
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-blue-600"
                  >
                    <Search className="w-5 h-5" />
                    <span className="text-gray-700">Поиск</span>
                  </button>
                )}
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

