import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialAuth, Button } from '@/shared/ui';
import { AppRoutesEnum } from '@/shared/constants';

export const HomePage: React.FC = () => {
  return (
    <section className="item-center flex h-screen flex-col justify-center">
      <div className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center">
        <img src="img/icon.svg" alt="icon" className="icon" />

        <div>
          <h1 className="mb-[8px] ml-0 mt-[20px] text-center text-[30px] font-bold leading-[40px]">
            ChatApp
          </h1>
          <h2 className="mb-0 ml-0 mt-0 text-[14px] font-normal">
            Connect, chat, and discover new friends
          </h2>
        </div>
        <div className="mt-[8px] flex w-full flex-col gap-3 gap-[8px]">
          <NavLink to={`/${AppRoutesEnum.REGISTER}`} className="flex w-full">
            <Button variant="default" title="Sigh Up">
              Sign Up
            </Button>
          </NavLink>

          <NavLink to={`/${AppRoutesEnum.LOGIN}`} className="flex w-full">
            <Button variant="ghost" title="Log In">
              Log In
            </Button>
          </NavLink>
          <NavLink to={`/${AppRoutesEnum.GUEST}`} className="flex w-full">
            <Button variant="ghost" title="Guest Entry">
              Guest Entry
            </Button>
          </NavLink>
        </div>
        <p className="mt-[14px] text-center text-[12px] font-medium leading-[100%] text-[#A3A3A3]">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <SocialAuth />
    </section>
  );
};
