// import { useFormContext } from 'react-hook-form';
// import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { MainTitle } from '../ui/MainTitle';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import type { RegisterInitialInput } from '@/features/auth/model/register-schema';
import { confirmVerify, verifyEmail } from '@/app/api/api';
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
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchVerefication = async () => {
      try {
        const email = getValues('email');
        await verifyEmail(email);
        // setStep(4);
      } catch (error) {
        console.log('Email verification error', error);
        throw error;
      }
    };
    fetchVerefication();
  }, [getValues]);

  const handleConfirmCode = async () => {
    if (!code || code.length !== 6) {
      console.log('Please enter a valid 6-digit code'); //Тут показувати помилку
      return;
    }
    try {
      const email = getValues('email');
      const response = await confirmVerify(email, code);
      console.log('Code confirmation response', response);
      setStep(4);
    } catch (error) {
      console.log('Code confirmation error', error);
      throw error;
    }
  };

  // const handleNext = async () => {
  //   // const isValid = await trigger(['email', 'password']);
  //   // if (isValid) {
  //   // }
  // };
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
                <Input
                  id="code"
                  type="email"
                  placeholder="123456"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <Button variant="default" onClick={handleConfirmCode}>
                Verify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
