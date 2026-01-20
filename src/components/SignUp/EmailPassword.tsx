import type React from 'react';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { NavLink } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import type { RegisterValues } from '@/features/auth';
import { MainTitle } from '../ui/MainTitle';
import { InputPassword } from '../ui/InputPassword';
interface StepPorps {
  setStep: (step: number) => void;
}

export const EmailPassword: React.FC<StepPorps> = ({ setStep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext<RegisterValues>();
  const handleNext = async () => {
    const isValid = await trigger(['email', 'password']);
    console.log('Step 1 values after validation:', getValues());
    if (isValid) {
      setStep(2);
    } else {
      console.log(errors);
    }
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Sing Up" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Join ChatApp"
              description="Sign up with your email and password to get started"
            />

            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <InputPassword
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register('password')}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              <p className="text-[12px] font-medium text-[#A3A3A3]">At least 8 characters</p>

              <div>
                <Label htmlFor="newPassword">Confirm new password</Label>
                <InputPassword
                  id="newPassword"
                  type="password"
                  // {...register('email')}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <Button variant="default" onClick={handleNext}>
                Next
              </Button>

              <div className="flex justify-between">
                <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
                  Already have an account?
                </p>
                <NavLink to="/login">
                  <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Log In</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
