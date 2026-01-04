interface ContentContainerProps {
  children: React.ReactNode;
  container?: 'default' | 'container';
  mb?: boolean;
}

export const ContentContainer = ({ 
  children, 
  container = 'default',
  mb = false 
}: ContentContainerProps) => {
  const containerClass = container === 'container' 
    ? 'container mx-auto px-24' 
    : 'max-w-screen-2xl mx-auto px-4';
  
  const mbClass = mb ? 'mb-6' : '';

  return (
    <div className={`${containerClass} ${mbClass}`}>
      {children}
    </div>
  );
};

