import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { SocialAuth } from '@/modules/auth/components/SocialAuth';
// interface MainWindowProps {
//   setOpenSingUp: (open: boolean) => void;
// }

export const MainWindow = () => {
  return (
    <section className="item-center flex h-screen flex-col justify-center">
      <div className="flex flex-1 flex-col items-center justify-center">
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
          <NavLink to="/register" className="flex w-full">
            <Button variant="default">Sign Up</Button>
          </NavLink>

          <NavLink to="/login" className="flex w-full">
            <Button variant="secondary">Log In</Button>
          </NavLink>
          <NavLink to="/guest" className="flex w-full">
            <Button variant="ghost">Guest Entry</Button>
          </NavLink>
        </div>

        <p className="mt-[14px] text-center text-[12px] font-medium leading-[100%] text-[#A3A3A3]">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <div className="mb-[22px]">
        <div className='mb-[32px] flex items-center gap-3 before:block before:h-[1px] before:flex-1 before:bg-[#E5E5E5] before:content-[""] after:block after:h-[1px] after:flex-1 after:bg-[#E5E5E5] after:content-[""]'>
          <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
        </div>
        <div className="gap-14px flex justify-between">
          <Button variant="media">
            <img src="/img/google.svg" alt="Google" />
          </Button>

          <Button variant="media">
            <img src="/img/fec.svg" alt="Facebook" />
          </Button>

          <Button variant="media">
            <img src="/img/apple.svg" alt="Apple" />
          </Button>
        </div>
      </div>
    </section>
  );
};
