interface SectionTitleProps {
  children: React.ReactNode;
  variant?: 'blue' | 'white' | 'black';
  className?: string;
}

export const SectionTitle = ({ 
  children, 
  variant = 'blue',
  className = '' 
}: SectionTitleProps) => {
  const textColor = variant === 'blue' 
    ? 'text-[#0052B4]' 
    : variant === 'white'
    ? 'text-white'
    : 'text-black';

  return (
    <h2 className={`font-onest font-bold text-[36px] leading-none uppercase text-center ${textColor} mb-12 ${className}`}>
      {children}
    </h2>
  );
};
