import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import type { SingUp } from '@/types/SingUp';
import { singUp } from '@/app/api/api';
import { FormProvider, useForm } from 'react-hook-form';

type FormData = SingUp & { step: number };

export const Register = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      email: '',
      login: '',
      password: '',
      step: 1,
    },
  });

  const { watch, handleSubmit } = methods;
  const step = watch('step');

  const handleCreateAcount = async (data: FormData) => {
    try {
      const { step, ...signupData } = data;
      const response = await singUp(signupData as SingUp);
      console.log(response);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleCreateAcount)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
      </form>
    </FormProvider>
  );
};