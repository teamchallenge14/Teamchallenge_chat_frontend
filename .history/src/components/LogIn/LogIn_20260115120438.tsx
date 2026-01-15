import { Label } from '@radix-ui/react-label';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { NavLink } from 'react-router-dom';
impo

export const LogIn = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Log In" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />

            <div className="mb-8 text-center">
              <h1 className="mb-2 text-[30px] font-bold leading-[40px]">Welcome back</h1>
              <h2 className="text-[14px] font-normal text-gray-600">Log in to continue chatting</h2>
            </div>

            <form className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="email" className="mb-[12px]">
                  Email or Username
                </Label>
                <Input id="email" type="email" placeholder="example@gmail.com" />
              </div>
              <div>
                <div className="mb-[12px] flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  {/* NanLink */}
                  <p className="text-[14px] font-medium text-[#171717]">Forgot password?</p>
                </div>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>

              <Button variant="default">Log In</Button>

              <div className="flex justify-between">
                <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
                  Don't have an account?
                </p>
                <NavLink to="/register">
                  <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Sign Up</p>
                </NavLink>
              </div>
            </form>
          </div>
        </div>

      
      </div>
    </div>
  );
};
