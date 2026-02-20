import type React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  isFinalStep?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack, isFinalStep }) => {
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
      {!isFinalStep && (
        <button className="my-[auto] h-[24px] w-[24px] p-1" onClick={handleGoBack} title="Go back">
          <img src="img/back.svg" alt="Back" className="h-[24px] w-[24px]" />
        </button>
      )}
      <p className="my-[auto] flex-1 text-center text-[16px] font-semibold leading-[28px]">
        {title}
      </p>
    </div>
  );
};
