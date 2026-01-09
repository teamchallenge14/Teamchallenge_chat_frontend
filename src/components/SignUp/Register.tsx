import { UserName } from './UserName';
import { PersonalInfo } from './PersonalInfo';
import { Interes } from './Interest';
import { FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { useRegisterForm, type RegisterValues } from '@/features/auth';
import { EmailPassword } from './EmailPassword';
import { Verification } from './Verification';
import { singUp } from '@/app/api/api';

export const Register = () => {
  const methods = useRegisterForm();
  const { handleSubmit, getValues } = methods;
  const [step, setStep] = useState(1);

  const handleCreateAcount = async (data: RegisterValues) => {
    console.log('Форма валідна, дані:', data);
    const allData = getValues() as RegisterValues;
    try {
      const response = await singUp(allData);
      console.log('Sign up success:', response);
      setStep(5);
    } catch (error) {
      console.error('Sign up error:', error);
      alert('Помилка реєстрації. Перевірте дані та спробуйте ще раз.');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleCreateAcount)}>
        {step === 1 && <EmailPassword setStep={setStep} />}
        {step === 2 && <Verification setStep={setStep} />}
        {step === 3 && <UserName setStep={setStep} />}
        {step === 4 && <PersonalInfo />}
        {step === 5 && <Interes />}
      </form>
    </FormProvider>
  );
};
