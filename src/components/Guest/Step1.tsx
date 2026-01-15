import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

export const Step1 = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Guest Entry" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />

            <div className="mb-8 text-center">
              <h1 className="mb-2 text-[30px] font-bold leading-[40px]">Choose Your Username</h1>
              <h2 className="text-[14px] font-normal text-gray-600">
                Enter a username to continue as guest
              </h2>
            </div>

            <form className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@gmail.com" />
              </div>

              <p className="text-[12px] font-medium text-[#A3A3A3]">
                This will be your temporary username
              </p>

              <Button variant="default">Continue as a Guest</Button>

              {/* <div className="flex justify-between">
                <p className="font-[400] text-[14px] leading-[20px] text-[#525252]">
                  Already have an account?
                </p>
                <NavLink to="/login">
                  <p className="font-medium text-[14px] leading-[100%] text-[#171717]">Log In</p>
                </NavLink>
              </div> */}
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
