import { UserName } from './UserName';
import { PersonalInfo } from './PersonalInfo';
import { Interes } from './Interest';
import { FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { useRegisterForm, type RegisterValues } from '@/features/auth';
import { EmailPassword } from './EmailPassword';
import { Verification } from './Verification';
import { singUp, updateUser } from '@/app/api/api';
import { useRegisterInitialForm } from '@/features/auth/model/use-register-form';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
// import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const initialMethods = useRegisterInitialForm();

  // Форма для кроків 4-5 (firstName, lastName, age, gender, description)
  const profileMethods = useRegisterForm();
  // const { handleSubmit, getValues } = methods;
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState<string | null>(null);
  // const navigate = useNavigate();

  const handleCreateAcount = async (data: RegisterInitialValues) => {
    console.log('Форма валідна, дані:', data);

    try {
      const response = await singUp(data);
      console.log('ID from backend:', response.user.id);
      setUserId(response.user.id);
      console.log('Sign up success:', response);
      setStep(3);
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  const handleUpdateAcount = async (data: RegisterValues) => {
    console.log('Форма валідна, дані:', data);
    // const data = getValues() as RegisterInitialValues;

    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    try {
      const response = await updateUser(userId, data);
      console.log('Sign up success:', response);
      setStep(5);
      // const userid = response.id;
      // if (userid) {
      //   navigate(`/interests/${userid}`);
      // } else {
      //   console.error('User ID is missing in the response');
      // }
      // setStep(5);
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <>
      {/* Кроки 1-3: використовуємо initialMethods */}
      {step <= 3 && (
        <FormProvider {...initialMethods}>
          <form onSubmit={initialMethods.handleSubmit(handleCreateAcount)}>
            {step === 1 && <EmailPassword setStep={setStep} />}
            {step === 2 && (
              <UserName
                setStep={setStep}
                // onVerify={() => initialMethods.handleSubmit(handleCreateAcount)()}
              />
            )}
            {step === 3 && <Verification setStep={setStep} />}
          </form>
        </FormProvider>
      )}

      {/* Кроки 4-5: використовуємо profileMethods */}
      {step >= 4 && (
        <FormProvider {...profileMethods}>
          <form onSubmit={profileMethods.handleSubmit(handleUpdateAcount)}>
            {step === 4 && <PersonalInfo />}
            {step === 5 && <Interes userId={userId} />}
          </form>
        </FormProvider>
      )}
      {/* <FormProvider {...initialMethods}>
        <form onSubmit={handleSubmit(handleCreateAcount)}>
          {step === 1 && <EmailPassword setStep={setStep} />}
          {step === 2 && <UserName setStep={setStep} onVerify={handleCreateAcount} />}
          {step === 3 && <Verification setStep={setStep} />}
          {step === 4 && <PersonalInfo />}
          {step === 5 && <Interes />}
        </form>
      </FormProvider> */}
    </>
  );
};
