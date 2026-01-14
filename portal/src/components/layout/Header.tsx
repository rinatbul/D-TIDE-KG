import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '/logo.png';
import russiaFlag from '/russia.png';
import usFlag from '/united states.png';
import kyrgyzstanFlag from '/kyrgyzstan.png';
import { workPackagesMenu } from '../../mocks/workPackages';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWorkPackagesOpen, setIsWorkPackagesOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('Русский');
  const [isScrolled, setIsScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const workPackagesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };
  const toggleWorkPackages = () => setIsWorkPackagesOpen(!isWorkPackagesOpen);

  const getCurrentFlag = () => {
    if (currentLang === 'Русский') return russiaFlag;
    if (currentLang === 'English') return usFlag;
    if (currentLang === 'Кыргызча') return kyrgyzstanFlag;
    return russiaFlag;
  };

  const getNavClass = (path: string) => {
    const isActive = location.pathname === path;
    return `font-onest font-medium text-base leading-none uppercase no-underline transition-colors duration-300 ${isActive ? 'text-[#0072C6] underline underline-offset-4 decoration-solid decoration-2' : 'text-black hover:text-[#0072C6]'}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (workPackagesRef.current && !workPackagesRef.current.contains(event.target as Node)) {
        setIsWorkPackagesOpen(false);
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
      <div className={`w-full ${isScrolled ? 'flex' : 'flex justify-center px-[5vw]'} max-w-[100vw]`}>
        <div className={`${isScrolled ? 'w-full max-w-full rounded-none m-0' : 'w-full max-w-screen-2xl'} bg-white rounded-[10px] opacity-100 shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${isScrolled ? 'h-16' : 'h-20'} pointer-events-auto transition-all duration-300 relative`}>
          <div className="fixed left-[calc(max(5vw,(100vw-1536px)/2)+1rem)] sm:left-[calc(max(5vw,(100vw-1536px)/2)+1.5rem)] lg:left-[calc(max(5vw,(100vw-1536px)/2)+2rem)] flex items-center gap-3 shrink-0 pointer-events-auto z-20 transition-all duration-300" style={{ top: isScrolled ? '2rem' : 'calc(5vh + 2.5rem)', transform: 'translateY(-50%)' }}>
            <img src={logo} alt="D-TIDE-KG" className={`${isScrolled ? 'h-8' : 'h-12'} w-auto transition-all duration-300 object-contain`} />
          </div>

          <nav className="hidden lg:flex items-center gap-6 fixed pointer-events-auto z-10 transition-all duration-300" style={{ top: isScrolled ? '2rem' : 'calc(5vh + 2.5rem)', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Link to="/" className={getNavClass('/')}>
              ГЛАВНАЯ
            </Link>
            <Link to="/about" className={getNavClass('/about')}>
              О ПРОЕКТЕ
            </Link>
            <Link to="/consortium" className={getNavClass('/consortium')}>
              КОНСОРЦИУМ
            </Link>
            <div className="relative" ref={workPackagesRef}>
              <button
                onClick={toggleWorkPackages}
                className={`font-onest font-medium text-base leading-none uppercase no-underline transition-colors duration-300 flex items-center gap-1 ${location.pathname.startsWith('/work-packages') ? 'text-[#0072C6] underline underline-offset-4 decoration-solid decoration-2' : 'text-black hover:text-[#0072C6]'}`}
              >
                РАБОЧИЕ ПАКЕТЫ
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isWorkPackagesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isWorkPackagesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[300px] z-50">
                  <Link
                    to="/work-packages"
                    onClick={() => setIsWorkPackagesOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-onest font-medium text-sm"
                  >
                    Все рабочие пакеты
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  {workPackagesMenu.map((wp) => (
                    <Link
                      key={wp.id}
                      to={wp.link}
                      onClick={() => setIsWorkPackagesOpen(false)}
                      className={`block px-4 py-2 hover:bg-gray-100 font-onest font-normal text-sm ${location.pathname === wp.link ? 'text-[#0072C6] bg-gray-50' : 'text-gray-700'}`}
                    >
                      {wp.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/documentation" className={getNavClass('/documentation')}>
              ДОКУМЕНТАЦИЯ
            </Link>
            <Link to="/news" className={getNavClass('/news')}>
              НОВОСТИ
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4 fixed right-[calc(max(5vw,(100vw-1536px)/2)+1rem)] sm:right-[calc(max(5vw,(100vw-1536px)/2)+1.5rem)] lg:right-[calc(max(5vw,(100vw-1536px)/2)+2rem)] pointer-events-auto z-20 transition-all duration-300" style={{ top: isScrolled ? '2rem' : 'calc(5vh + 2.5rem)', transform: 'translateY(-50%)' }}>
            <div className="relative w-24" ref={searchRef}>
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-500 shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Поиск..."
                    className="py-1 focus:outline-none flex-1 bg-transparent text-gray-700 min-w-0"
                  />
                  <button
                    onClick={toggleSearch}
                    className="text-gray-400 hover:text-gray-600 shrink-0"
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
                  <span className="font-onest font-normal text-base leading-none text-black">Поиск</span>
                </button>
              )}
            </div>
            <div className="relative" ref={langRef}>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <img src={getCurrentFlag()} alt={currentLang} style={{ width: '17px', height: '17px' }} />
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
                  <button
                    onClick={() => {
                      setCurrentLang('Кыргызча');
                      setIsLangOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <img src={kyrgyzstanFlag} alt="KG" style={{ width: '17px', height: '17px' }} />
                    Кыргызча
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className={`${isScrolled ? 'container mx-auto px-3' : 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'} flex items-center justify-end h-full lg:hidden`}>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden w-full ${isScrolled ? 'flex' : 'flex justify-center px-[5vw]'} max-w-[100vw]`}>
          <div className={`${isScrolled ? 'w-full max-w-full rounded-none m-0' : 'w-full max-w-screen-2xl'} bg-white rounded-[10px] opacity-100 shadow-[0_2px_8px_rgba(0,0,0,0.1)] h-auto border-t border-gray-200`}>
            <div className={`${isScrolled ? 'container mx-auto px-6' : 'px-4 sm:px-6'}`}>
              <nav className="py-4 flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={getNavClass('/')}>
              ГЛАВНАЯ
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={getNavClass('/about')}>
              О ПРОЕКТЕ
            </Link>
            <Link to="/consortium" onClick={() => setIsMenuOpen(false)} className={getNavClass('/consortium')}>
              КОНСОРЦИУМ
            </Link>
            <div className="flex flex-col">
              <button
                onClick={() => setIsWorkPackagesOpen(!isWorkPackagesOpen)}
                className={`font-onest font-medium text-base leading-none uppercase no-underline transition-colors duration-300 flex items-center justify-between ${location.pathname.startsWith('/work-packages') ? 'text-[#0072C6] underline underline-offset-4 decoration-solid decoration-2' : 'text-black hover:text-[#0072C6]'}`}
              >
                РАБОЧИЕ ПАКЕТЫ
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isWorkPackagesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isWorkPackagesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link
                    to="/work-packages"
                    onClick={() => {
                      setIsWorkPackagesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className="font-onest font-medium text-sm text-gray-700 hover:text-[#0072C6]"
                  >
                    Все рабочие пакеты
                  </Link>
                  {workPackagesMenu.map((wp) => (
                    <Link
                      key={wp.id}
                      to={wp.link}
                      onClick={() => {
                        setIsWorkPackagesOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className={`font-onest font-normal text-sm ${location.pathname === wp.link ? 'text-[#0072C6]' : 'text-gray-700 hover:text-[#0072C6]'}`}
                    >
                      {wp.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
                  <img src={getCurrentFlag()} alt={currentLang} style={{ width: '17px', height: '17px' }} />
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
                    <button
                      onClick={() => {
                        setCurrentLang('Кыргызча');
                        setIsLangOpen(false);
                      }}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <img src={kyrgyzstanFlag} alt="KG" style={{ width: '17px', height: '17px' }} />
                      Кыргызча
                    </button>
                  </div>
                )}
              </div>
              </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

