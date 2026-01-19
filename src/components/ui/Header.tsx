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
    <div className="item-center flex h-[65px] text-center">
      <img
        src="img/back.svg"
        alt="Back"
        className="my-[auto] h-[24px] w-[24px]"
        onClick={handleGoBack}
      />
      <p className="my-[auto] flex-1 text-center text-[16px] font-semibold leading-[28px]">
        {title}
      </p>
    </div>
  );
};
