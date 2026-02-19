// import { useFormContext } from 'react-hook-form';
// import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { MainTitle } from '../ui/MainTitle';
import { useFormContext } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import type { RegisterInitialInput } from '@/features/auth/model/register-schema';
import { confirmVerify, verifyEmail } from '@/app/api/api';
import { useMutation } from '@tanstack/react-query';
import { useRegisterSetStep } from '@/store/register-store';
import { RegisterStepsEnum } from '@/store/@types';

export const Verification: React.FC = () => {
  const setRegisterStep = useRegisterSetStep();

  const { getValues } = useFormContext<RegisterInitialInput>();
  const email = getValues('email');
  const [code, setCode] = useState('');
  const hasSentCode = useRef(false);

  const verifyEmailMutation = useMutation({
    mutationFn: (email: string) => verifyEmail(email),
    onSuccess: () => {
      console.log('Verification email sent successfully');
    },
    onError: (error) => {
      console.log('Email verification error', error);
    },
  });

  // Відправляю код ТІЛЬКИ ОДИН РАЗ
  useEffect(() => {
    if (email && !hasSentCode.current) {
      hasSentCode.current = true;
      verifyEmailMutation.mutate(email);
    }
  }, []);

  const confirmMutation = useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) => confirmVerify(email, code),
    onSuccess: () => {
      setRegisterStep(RegisterStepsEnum.ENTER_PERSONAL_INFO);
    },
    onError: (error) => {
      console.log('Code confirmation error', error);
    },
  });

  const handleConfirmCode = () => {
    if (!code || code.length !== 6) {
      return;
    }
    confirmMutation.mutate({ email, code });
  };

  const handleResendCode = () => {
    setCode('');
    verifyEmailMutation.mutate(email);
  };

  const navToEmailEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterStep(RegisterStepsEnum.EMAIL_EDIT);
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Email Verification" />
      <div className="flex flex-1 flex-col justify-center overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Check your Email"
              description="We've sent a 6-digit verification code to your email"
            />
            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="code">Verification code</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="123456"
                  value={code}
                  maxLength={6}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                />
                {confirmMutation.isError && (
                  <p className="mt-1 text-sm text-red-600">
                    Invalid code. Please try again or request a new one.
                  </p>
                )}
              </div>

              <Button
                variant="default"
                onClick={handleConfirmCode}
                type="button"
                disabled={confirmMutation.isPending || code.length !== 6}
              >
                {confirmMutation.isPending ? 'Verifying...' : 'Verify'}
              </Button>

              <div className="flex justify-between text-center text-sm text-gray-600">
                Didn't receive the code?
                <button
                  onClick={handleResendCode}
                  type="button"
                  className="font-semibold text-black underline hover:no-underline disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {verifyEmailMutation.isPending ? 'Sending...' : 'Resend'}
                </button>
              </div>

              <div className="flex justify-between text-center text-sm text-gray-600">
                Entered the wrong email?
                <button
                  onClick={(e) => navToEmailEdit(e)}
                  type="button"
                  className="font-semibold text-black underline hover:no-underline disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Edit Email
                </button>
              </div>

              {verifyEmailMutation.isSuccess && (
                <p className="text-center text-sm text-green-600">
                  New code sent! Check your email.
                </p>
              )}

              {verifyEmailMutation.isError && (
                <p className="text-center text-sm text-red-600">
                  Failed to send code. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
