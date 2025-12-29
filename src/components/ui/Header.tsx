import type React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex item-center h-[65px] text-center">
      <img
        src="img/back.svg"
        alt="Back"
        className="h-[24px] w-[24px] my-[auto]"
        onClick={handleGoBack}
      />
      <p className="text-center flex-1 my-[auto] font-semibold text-[16px] leading-[28px]">{title}</p>
    </div>
  );
};
