import { useState } from 'react';
import { EmailPage } from './EmailPage';
import { PasswordPage } from './PaswordPage';
import { Success } from './Success';
import { sendResetCodeConfirm } from '@/app/api/api';
import { useMutation } from '@tanstack/react-query';

export const Reset = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(''); //Zustand
  const [code, setCode] = useState(''); //Zustand
  const [newPassword, setNewPassword] = useState(''); //Zustand

  const resetPasswordMutation = useMutation({
    mutationFn: ({
      email,
      code,
      newPassword,
    }: {
      email: string;
      code: string;
      newPassword: string;
    }) => sendResetCodeConfirm(email, code, newPassword),
    onSuccess: () => {
      setStep(3);
    },
    onError(error) {
      console.log('Reset password error', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code || !newPassword) {
      console.log('Please fill in all fields'); // ERROR
      return;
    }

    resetPasswordMutation.mutate({ email, code, newPassword });
  };
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && <EmailPage setStep={setStep} email={email} setEmail={setEmail} />}
      {step === 2 && (
        <PasswordPage
          setStep={setStep}
          code={code}
          setCode={setCode}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
        />
      )}
      {step === 3 && <Success />}
    </form>
  );
};
