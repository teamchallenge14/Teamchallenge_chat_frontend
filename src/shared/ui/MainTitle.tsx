import type React from 'react';

interface MainTitleProps {
  title: string;
  description: string;
  image: string;
}

export const MainTitle: React.FC<MainTitleProps> = ({ title, description, image }) => {
  return (
    <>
      <img src={image} alt="icon" className="icon mb-5" />

      <div className="mb-8 text-center">
        <h1 className="mb-2 text-[30px] font-bold leading-[40px]">{title}</h1>
        <h2 className="text-[14px] font-normal text-gray-600">{description}</h2>
      </div>
    </>
  );
};
