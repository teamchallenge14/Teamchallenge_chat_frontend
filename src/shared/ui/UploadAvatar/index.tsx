import React from 'react';
import { Button } from '../Button/button';

export const UploadAvatar: React.FC = () => {
  return (
    <>
      <p className="mb-6 text-left text-[14px] font-medium leading-[20px]">Profile Photo</p>

      <div className="relative mb-[16px] inline-block">
        <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
          <img src="img/user.svg" alt="Profile" className="h-[42px] w-[42px]" />
        </div>

        <Button
          variant="upload"
          className="absolute bottom-0 right-0 flex h-[36px] min-h-0 w-[36px] items-center justify-center rounded-full border-2 border-white bg-[#0A0A0A] p-0 text-white hover:bg-[#333333]"
        >
          <img src="img/camera.svg" alt="Upload photo" className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
