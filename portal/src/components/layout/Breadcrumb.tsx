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
    <nav className="breadcrumb-container">
      <div className="flex items-center gap-2">
        <Link to="/" className="breadcrumb-home">
          <img src={homeIcon} alt="Home" className="breadcrumb-home-icon" />
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="breadcrumb-separator">/</span>
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

