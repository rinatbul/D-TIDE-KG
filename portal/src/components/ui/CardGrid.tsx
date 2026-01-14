interface CardGridProps {
  children: React.ReactNode;
  columns?: {
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
  gap?: 'gap-4' | 'gap-6' | 'gap-8';
  className?: string;
}

const mdColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

const lgColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export const CardGrid = ({ 
  children, 
  columns = { md: 2, lg: 3 },
  gap = 'gap-6',
  className = ''
}: CardGridProps) => {
  const mdCols = columns.md ? mdColsMap[columns.md] : '';
  const lgCols = columns.lg ? lgColsMap[columns.lg] : '';

  return (
    <div className={`grid ${mdCols} ${lgCols} ${gap} mb-8 ${className}`}>
      {children}
    </div>
  );
};
