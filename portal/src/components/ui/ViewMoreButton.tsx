import { Link } from 'react-router-dom';

interface ViewMoreButtonProps {
  to: string;
  variant?: 'outline' | 'outline-thick';
  text?: string;
  className?: string;
}

export const ViewMoreButton = ({
  to,
  variant = 'outline',
  text = 'Больше новостей',
  className = ''
}: ViewMoreButtonProps) => {
  const baseClasses = 'font-onest font-medium text-base leading-none transition-all duration-300 no-underline';

  const variantClasses = variant === 'outline'
    ? 'px-8 py-3 border border-blue-secondary text-blue-secondary rounded hover:border-[#0052B4] hover:text-[#0052B4]'
    : 'px-8 py-3 border-2 border-black text-black rounded-lg hover:text-[#0052B4] hover:border-[#0052B4]';

  return (
    <div className="flex justify-center">
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {text}
      </Link>
    </div>
  );
};
