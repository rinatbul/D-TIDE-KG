import { 
  LayoutDashboard, 
  Info, 
  Users, 
  FolderKanban, 
  BookOpen, 
  Newspaper,
  Image,
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'hero-section', label: 'Главный баннер', icon: Image, path: '/hero-section' },
  { id: 'about', label: 'О проекте', icon: Info, path: '/about' },
  { id: 'consortium', label: 'Консорциум', icon: Users, path: '/consortium' },
  { id: 'work-packages', label: 'Рабочие пакеты', icon: FolderKanban, path: '/work-packages' },
  { id: 'publications', label: 'Публикации', icon: BookOpen, path: '/publications' },
  { id: 'news', label: 'Новости', icon: Newspaper, path: '/news' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-white border-r border-gray-200 w-64 h-full flex flex-col">
      <nav className="py-4 flex flex-col flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded cursor-pointer transition-colors ${
                isActive
                  ? 'bg-[#0072C6] text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors border-2 border-red-800 text-red-800 hover:bg-red-800 hover:border-red-800 hover:text-white">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

