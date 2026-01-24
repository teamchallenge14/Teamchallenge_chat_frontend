import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Header } from '../ui/Header';
import { MainTitle } from '../ui/MainTitle';
import type React from 'react';
import { InputPassword } from '../ui/InputPassword';

interface PasswordProps {
  setStep: (step: number) => void;
  code: string;
  setCode: (code: string) => void;
  newPassword: string;
  setNewPassword: (password: string) => void;
}

export const PasswordPage: React.FC<PasswordProps> = ({
  // setStep,
  code,
  setCode,
  newPassword,
  setNewPassword,
}) => {
  // const handleSend = () => {
  //   setStep(3);
  // };
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Reset Password" />
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Reset Password"
              description="Please enter your 6-digit verification code and set a new password"
            />
            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="code">Verification code</Label>
                <Input
                  id="code"
                  type="string"
                  placeholder="123456"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  // {...register('email')}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <div>
                <Label htmlFor="newPassword">New password</Label>
                <InputPassword
                  id="newPassword"
                  type="password"
                  placeholder="123456"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  // {...register('email')}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
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

              <Button variant="default" type="submit">
                Reset Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
