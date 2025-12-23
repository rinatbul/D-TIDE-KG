interface DividerProps {
  container?: 'default' | 'container';
}

export const Divider = ({ container = 'default' }: DividerProps) => {
  const containerClass = container === 'container' 
    ? 'container mx-auto' 
    : 'max-w-screen-2xl mx-auto';

  return (
    <div className={`${containerClass} h-px bg-[#D9D9D9] mb-5`}></div>
  );
};

