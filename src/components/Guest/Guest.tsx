import { useState } from 'react';
import { GuestUserName } from './GuestUserName';
import { GuestInfo } from './GuestInfo';
import { useRegisterForm } from '@/features/auth';
import { FormProvider } from 'react-hook-form';
import { GuestInteres } from './GuestInterest';

export const Guest = () => {
  const [step, setStep] = useState(1);
  const profileMethods = useRegisterForm();

  const hondleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleUpdateAcount = async () => {
    setStep(3);
  };
  return (
    <>
      <form onSubmit={hondleSubmit}>{step === 1 && <GuestUserName setStep={setStep} />}</form>

      {step >= 2 && (
        <FormProvider {...profileMethods}>
          <form onSubmit={profileMethods.handleSubmit(handleUpdateAcount)}>
            {step === 2 && <GuestInfo setStep={setStep} />}
            {step === 3 && <GuestInteres />}
          </form>
        </FormProvider>
      )}
    </>
  );
};
