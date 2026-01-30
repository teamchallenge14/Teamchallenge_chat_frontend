import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { MainTitle } from '../ui/MainTitle';
import type React from 'react';

interface GuestUserNameProps {
  setStep: (step: number) => void;
}

const list = [
  { text: 'Random chat only access' },
  { text: 'No chat history saved' },
  { text: 'Cannot access rooms' },
  { text: 'Cannot save contacts' },
];

export const GuestUserName: React.FC<GuestUserNameProps> = ({ setStep }) => {
  console.log(setStep);
  const handleNext = () => {
    setStep(2);
  };
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Guest Entry" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Choose Your Username"
              description="Enter a username to continue as guest"
            />
            <form className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@gmail.com" />
              </div>

              <p className="text-[12px] font-medium text-[#A3A3A3]">
                This will be your temporary username
              </p>

              <Button variant="default" type="button" onClick={handleNext}>
                Continue as a Guest
              </Button>

              <div className="mt-[80px]">
                <div className="flex gap-[12px]">
                  <img alt="warning" src="/img/warning.svg" className="h-[20px] w-[20px]" />
                  <p className="text-[14px] font-semibold leading-[20px] text-[#525252]">
                    Guest Limitations
                  </p>
                </div>{' '}
                <ul className="mt-[16px] flex flex-col gap-[6px]">
                  {list.map((item, index) => (
                    <li
                      key={index}
                      className="relative pl-4 text-[14px] font-normal leading-[16px] text-[#525252]"
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md justify-between pb-8">
          {/* <div className='before:content-[""] before:block before:flex-1 before:h-[1px] before:bg-[#E5E5E5] after:content-[""] after:block after:flex-1 after:h-[1px] after:bg-[#E5E5E5] flex items-center gap-3 mb-[32px]'>
            <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
          </div>
           */}
          <p>Want full features? </p>
          <NavLink to="/register">
            <p>Sign Up</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
