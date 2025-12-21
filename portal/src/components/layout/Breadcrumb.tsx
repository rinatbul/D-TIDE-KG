import { Link } from 'react-router-dom';
import homeIcon from '/Home.png';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    path?: string;
  }>;
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="p-0">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center transition-opacity duration-300 hover:opacity-70">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="font-onest font-normal text-[15px] leading-none text-black">/</span>
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className="font-onest font-normal text-[15px] leading-none text-black no-underline transition-colors duration-300 hover:text-blue-secondary">
                {item.label}
              </Link>
            ) : (
              <span className="font-onest font-normal text-[15px] leading-none text-black">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

