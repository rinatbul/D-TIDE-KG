import { Search, FolderPlus, Plus } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '/logo.png';

const getAddButtonText = (pathname: string): string => {
  const routeMap: Record<string, string> = {
    '/': 'Добавить',
    '/about': 'Добавить',
    '/consortium': 'Добавить участника',
    '/work-packages': 'Добавить пакет',
    '/publications': 'Добавить публикацию',
    '/news': 'Добавить новость',
  };
  return routeMap[pathname] || 'Добавить';
};

export const Header = () => {
  const location = useLocation();
  const addButtonText = getAddButtonText(location.pathname);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="D-TIDE-KG" className="h-10 w-auto" />
          <span className="text-black font-semibold text-lg">D-TIDE-KG</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="bg-[#0072C6] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#0066B3] transition-colors">
          <FolderPlus className="w-4 h-4" />
          <Plus className="w-3 h-3" />
          <span>{addButtonText}</span>
        </button>
      </div>
    </header>
  );
};

