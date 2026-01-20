import { useState } from 'react';
import { EmailPage } from './EmailPage';
import { PasswordPage } from './PaswordPage';
import { Success } from './Success';

export const Reset = () => {
  const [step, setStep] = useState(1);
  return (
    <form>
      {step === 1 && <EmailPage setStep={setStep} />}
      {step === 2 && <PasswordPage setStep={setStep} />}
      {step === 3 && <Success />}
    </form>
  );
};
