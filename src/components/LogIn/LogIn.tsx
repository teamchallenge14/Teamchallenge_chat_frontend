import { Label } from '@radix-ui/react-label';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { NavLink } from 'react-router-dom';

export const LogIn = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="Log In" />
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-md">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />

            <div className="text-center mb-8">
              <h1 className="text-[30px] font-bold leading-[40px] mb-2">Welcome back</h1>
              <h2 className="font-normal text-[14px] text-gray-600">Log in to continue chatting</h2>
            </div>

            <form className="w-full flex flex-col gap-[16px]">
              <div>
                <Label htmlFor="email" className="mb-[12px]">
                  Email or Username
                </Label>
                <Input id="email" type="email" placeholder="example@gmail.com" />
              </div>
              <div>
                <div className="flex justify-between mb-[12px]">
                  <Label htmlFor="password">Password</Label>
                  {/* NanLink */}
                  <p className="font-medium text-[14px] text-[#171717]">Forgot password?</p>
                </div>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>

              <Button variant="default">Log In</Button>

              <div className="flex justify-between">
                <p className="font-[400] text-[14px] leading-[20px] text-[#525252]">
                  Don't have an account?
                </p>
                <NavLink to='/register'>
                  <p className="font-medium text-[14px] leading-[100%] text-[#171717]">Sign Up</p>
                </NavLink>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full max-w-md px-4 mx-auto pb-8">
          <div className='before:content-[""] before:block before:flex-1 before:h-[1px] before:bg-[#E5E5E5] after:content-[""] after:block after:flex-1 after:h-[1px] after:bg-[#E5E5E5] flex items-center gap-3 mb-[32px]'>
            <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
          </div>
          <div className="flex gap-3 justify-between">
            <Button variant="media" className="flex-1">
              <img src="/img/google.svg" alt="Google" />
            </Button>

            <Button variant="media" className="flex-1">
              <img src="/img/fec.svg" alt="Facebook" />
            </Button>

            <Button variant="media" className="flex-1">
              <img src="/img/apple.svg" alt="Apple" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
