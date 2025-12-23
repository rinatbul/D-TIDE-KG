interface PageTitleProps {
  children: React.ReactNode;
  mb?: '4' | '10';
}

export const PageTitle = ({ children, mb = '10' }: PageTitleProps) => {
  const mbClass = mb === '4' ? 'mb-4' : 'mb-10';
  
  return (
    <h1 className={`font-onest font-bold text-[40px] leading-none text-left text-black ${mbClass}`}>
      {children}
    </h1>
  );
};

