interface ContentContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'container' | 'container-px30' | 'container-px4' | 'screen-2xl-px4' | 'screen-2xl-px6';
  mb?: boolean;
  className?: string;
}

export const ContentContainer = ({ 
  children, 
  variant = 'screen-2xl-px4',
  mb = false,
  className = ''
}: ContentContainerProps) => {
  const containerClassMap = {
    'default': 'max-w-screen-2xl mx-auto px-6',
    'container': 'container mx-auto px-24',
    'container-px30': 'container mx-auto px-30',
    'container-px4': 'container mx-auto px-4',
    'screen-2xl-px4': 'max-w-screen-2xl mx-auto px-4',
    'screen-2xl-px6': 'max-w-screen-2xl mx-auto px-6',
  };
  
  const containerClass = containerClassMap[variant];
  const mbClass = mb ? 'mb-6' : '';

  return (
    <div className={`${containerClass} ${mbClass} ${className}`}>
      {children}
    </div>
  );
};

