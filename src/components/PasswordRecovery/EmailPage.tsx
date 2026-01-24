import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Header } from '../ui/Header';
import { MainTitle } from '../ui/MainTitle';
import type React from 'react';
import { sendResetCode } from '@/app/api/api';

interface EmailPageProps {
  setStep: (step: number) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const EmailPage: React.FC<EmailPageProps> = ({ setStep, email, setEmail }) => {
  const valideEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSend = async () => {
    if (!email) {
      console.log('Please enter your email'); // ERROR
      return;
    }
    if (!valideEmail(email)) {
      console.log('Please enter a valid email'); // ERROR
      return;
    }

    try {
      await sendResetCode(email);
      setStep(2);
    } catch (error) {
      console.log('Send reset code error', error);
      throw error;
    }
  };
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Reset Password" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Reset Password"
              description="Enter your email to reset it"
            />
            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // {...register('email')}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <Button variant="default" type="button" onClick={handleSend}>
                Send Verification Code
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
