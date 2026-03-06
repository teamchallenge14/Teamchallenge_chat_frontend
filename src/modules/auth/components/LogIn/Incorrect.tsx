import { Button, MainTitle } from '@/shared/ui';
import { NavLink } from 'react-router-dom';

export const Incorrect: React.FC = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/x.svg"
              title="Incorrect email, username, or password"
              description="We couldn’t log you in with these details"
            />
            <div className="flex w-full flex-col gap-[14px]">
              <Button>Try Again</Button>
              <Button variant="ghost">Reset Password</Button>
            </div>
            <div className="mt-[14px] flex w-full justify-between">
              <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
                Don't have an account?
              </p>
              <NavLink to="/register">
                <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Sign Up</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
