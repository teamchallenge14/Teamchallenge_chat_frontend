import type React from 'react';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { NavLink } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import type { FormData } from '@/types/formData';

export const Step1: React.FC = () => {
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = useFormContext<FormData>();
  console.log();
  const handleNext = async () => {
    const isValid = await trigger(['email', 'password']);
    if (isValid) {
      setValue('step', 2);
    }
  };

  console.log(errors.email);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Sing Up" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />

            <div className="mb-8 text-center">
              <h1 className="mb-2 text-[30px] font-bold leading-[40px]">Join ChatApp</h1>
              <h2 className="text-[14px] font-normal text-gray-600">
                Sign up with your email and password to get started
              </h2>
            </div>

            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters' },
                  })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              <p className="text-[12px] font-medium text-[#A3A3A3]">At least 8 characters</p>

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

        {/* ... решта UI з соціальними кнопками */}
      </div>
    </div>
  );
};
