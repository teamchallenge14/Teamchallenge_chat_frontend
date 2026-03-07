import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useSignUpCurrentStep } from '@/modules/auth/store/authStore';
import { useRegisterForm } from '@/modules/auth/hooks/useRegisterForm';
import { SignUpStepsEnum } from '@/modules/auth/types/@auth.types';
import {
  EmailEdit,
  EmailPassword,
  FinalyWindow,
  Interes,
  PersonalInfo,
  UserName,
  Verification,
} from '@/modules/auth/components/SignUp';

export const SignUpPage: React.FC = () => {
  const methods = useRegisterForm();

  const currentStep = useSignUpCurrentStep();

  // Step rendering
  const renderStep = () => {
    switch (currentStep) {
      case SignUpStepsEnum.ENTER_EMAIL:
        return <EmailPassword />;

      case SignUpStepsEnum.ENTER_USERNAME:
        return <UserName />;

      case SignUpStepsEnum.EMAIL_VERIFICATION:
        return <Verification />;

      case SignUpStepsEnum.ENTER_PERSONAL_INFO:
        return <PersonalInfo />;

      case SignUpStepsEnum.ENTER_INTERESTS:
        return <Interes />;

      case SignUpStepsEnum.EMAIL_EDIT:
        return <EmailEdit />;

      case SignUpStepsEnum.FINALY_STEP:
        return <FinalyWindow />;

      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form>{renderStep()}</form>
    </FormProvider>
  );
};
