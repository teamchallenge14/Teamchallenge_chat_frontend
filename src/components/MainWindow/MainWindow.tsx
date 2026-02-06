import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { SocialAuth } from '@/modules/auth/components/SocialAuth';
import { InputField } from '@components/ui';

// interface MainWindowProps {
//   setOpenSingUp: (open: boolean) => void;
// }

export const MainWindow = () => {
  const onChange = (value: string) => {
    console.log(value);
  };
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

        <InputField
          id="email"
          onChange={onChange}
          fieldType="email"
          placeholder="Email"
          isError={true}
          errorMessage={'Invalid email address'}
        />

        <InputField
          id="password"
          onChange={onChange}
          fieldType="password"
          placeholder="Password"
          label={'Password'}
        />

        <InputField
          id="bio"
          onChange={onChange}
          fieldType="textarea"
          placeholder="Enter your bio"
          label={'Bio'}
        />

        <InputField
          id="search"
          onChange={onChange}
          fieldType="search"
          placeholder="Search..."
          label={'Search'}
        />

        <p className="mt-[14px] text-center text-[12px] font-medium leading-[100%] text-[#A3A3A3]">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <SocialAuth />
    </section>
  );
};
