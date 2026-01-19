// import { useFormContext } from 'react-hook-form';
// import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { MainTitle } from '../ui/MainTitle';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import type { RegisterInitialInput } from '@/features/auth/model/register-schema';
interface StepPorps {
  setStep: (step: number) => void;
}

export const Verification: React.FC<StepPorps> = ({ setStep }) => {
  const {
    // register,
    // formState: { errors },
    // trigger,
    getValues,
  } = useFormContext<RegisterInitialInput>();
  // const [code, setCode] = useState('');

  useEffect(() => {
    const fetchVerefication = async () => {
      try {
        // const email = getValues('email');
        // await verifyEmail(email);
        setStep(4);
      } catch (error) {
        console.log('Email verification error', error);
        throw error;
      }
    };
    fetchVerefication();
  }, [getValues]);

  const handleNext = async () => {
    // const isValid = await trigger(['email', 'password']);
    // if (isValid) {
    setStep(4);
    // }
  };
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Email Verification " />
      <div className="flex flex-1 flex-col justify-center overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Check your Email"
              description="We’ve sent a 6-digit verification code to your email"
            />
            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="code">Verification code</Label>
                <Input id="code" type="email" placeholder="123456" />
              </div>
              <Button variant="default" onClick={handleNext}>
                Verify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
