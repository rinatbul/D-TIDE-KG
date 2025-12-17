import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="D-TIDE-KG" className="h-10 w-auto" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              ГЛАВНАЯ
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              О ПРОЕКТЕ
            </Link>
            <Link to="/consortium" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              КОНСОРЦИУМ
            </Link>
            <Link
              to="/work-packages"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm"
            >
              РАБОЧИЕ ПАКЕТЫ
            </Link>
            <Link
              to="/documentation"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm"
            >
              ДОКУМЕНТАЦИЯ
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              НОВОСТИ
            </Link>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm mb-2">
              © 2025 D-TIDE-KG. Сайт не является публичной офертой
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

