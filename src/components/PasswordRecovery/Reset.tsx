import { useState } from 'react';
import { EmailPage } from './EmailPage';
import { PasswordPage } from './PaswordPage';
import { Success } from './Success';
import { sendResetCodeConfirm } from '@/app/api/api';

export const Reset = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code || !newPassword) {
      console.log('Please fill in all fields'); // ERROR
      return;
    }

    try {
      await sendResetCodeConfirm(email, code, newPassword);
      setStep(3);
    } catch (error) {
      console.log('Reset password error', error);
      throw error;
    }
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
