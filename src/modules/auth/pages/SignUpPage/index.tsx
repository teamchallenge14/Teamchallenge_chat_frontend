import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useRegisterCurrentStep } from '@/modules/auth/store/registerStore';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import { RegisterStepsEnum } from '../../types/@auth.types';
import { EmailPassword } from '../../components/SignUp/EmailPassword';
import { UserName } from '../../components/SignUp/UserName';
import { Verification } from '../../components/SignUp/Verification';
import { PersonalInfo } from '../../components/SignUp/PersonalInfo';
import { Interes } from '../../components/SignUp/Interest';
import { EmailEdit } from '../../components/SignUp/EmailEdit';
import { FinalyWindow } from '../../components/SignUp/FinalyWindow';

export const SignUpPage: React.FC = () => {
  const methods = useRegisterForm();

  const currentStep = useRegisterCurrentStep();

  // Step rendering

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

  return (
    <FormProvider {...methods}>
      <form>{renderStep()}</form>
    </FormProvider>
  );
};
