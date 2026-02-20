import React from 'react';
import { UserName } from './UserName';
import { PersonalInfo } from './PersonalInfo';
import { Interes } from './Interest';
import { FormProvider } from 'react-hook-form';
import { useRegisterForm, type RegisterValues } from '@/features/auth';
import { EmailPassword } from './EmailPassword';
import { Verification } from './Verification';
import { singUp, updateUser } from '@/app/api/api';
import { useRegisterInitialForm } from '@/features/auth/model/use-register-form';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
import { useMutation } from '@tanstack/react-query';
import {
  useRegisterCurrentStep,
  useRegisterSetStep,
  useRegisterSetUserID,
  useRegisterUserID,
} from '@/store/register-store';
import { RegisterStepsEnum } from '@/store/@types';
import { EmailEdit } from './EmailEdit';
import { FinalyWindow } from './FinalyWindow';

export const Register: React.FC = () => {
  const initialMethods = useRegisterInitialForm();

  // Форма для кроків 4-5 (firstName, lastName, age, gender, description)
  const profileMethods = useRegisterForm();

  const currentStep = useRegisterCurrentStep();
  const setStep = useRegisterSetStep();

  const userId = useRegisterUserID();
  const setUserID = useRegisterSetUserID();

  // const navigate = useNavigate();

  const singUpMutation = useMutation({
    mutationFn: singUp,
    onSuccess: (response) => {
      setUserID(response.user.id);
      console.log('Sign up success:', response);
      setStep(RegisterStepsEnum.EMAIL_VERIFICATION);
    },
    onError: (error) => {
      console.error('Sign up error:', error);
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: RegisterValues }) =>
      updateUser(userId, data),
    onSuccess: (response) => {
      console.log('update success:', response);
      setStep(RegisterStepsEnum.ENTER_INTERESTS);
    },
    onError: (error) => {
      console.error('update error:', error);
    },
  });

  const handleCreateAcount = async (data: RegisterInitialValues) => {
    console.log('Форма валідна, дані:', data);
    singUpMutation.mutate(data);
  };

  const handleUpdateAcount = async (data: RegisterValues) => {
    console.log('Форма валідна, дані:', data);

    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    updateUserMutation.mutate({ userId, data });
  };

  const isInitialFlow =
    currentStep === RegisterStepsEnum.ENTER_EMAIL ||
    currentStep === RegisterStepsEnum.ENTER_USERNAME ||
    currentStep === RegisterStepsEnum.EMAIL_VERIFICATION;

  const renderStep = () => {
    switch (currentStep) {
      case RegisterStepsEnum.ENTER_EMAIL:
        return <EmailPassword />;

      case RegisterStepsEnum.ENTER_USERNAME:
        return <UserName />;

      case RegisterStepsEnum.EMAIL_VERIFICATION:
        return <Verification />;

      case RegisterStepsEnum.ENTER_PERSONAL_INFO:
        return <PersonalInfo />;

      case RegisterStepsEnum.ENTER_INTERESTS:
        return <Interes />;
      case RegisterStepsEnum.EMAIL_EDIT:
        return <EmailEdit />;

      case RegisterStepsEnum.FINALY_STEP:
        return <FinalyWindow />;
      default:
        return null;
    }
  };

  const renderForm = () => {
    if (isInitialFlow) {
      return (
        <FormProvider {...initialMethods}>
          <form onSubmit={initialMethods.handleSubmit(handleCreateAcount)}>{renderStep()}</form>
        </FormProvider>
      );
    }

    return (
      <FormProvider {...profileMethods}>
        <form onSubmit={profileMethods.handleSubmit(handleUpdateAcount)}>{renderStep()}</form>
      </FormProvider>
    );
  };

  return <>{renderForm()}</>;
};
