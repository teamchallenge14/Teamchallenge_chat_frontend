import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useGuestForm } from '../../hooks';
import { useGuestCurrentStep } from '../../store/authStore';
import { GuestStepsEnum } from '../../types/@auth.types';
import { GuestInfo, GuestInterests, GuestUserName } from '@/modules/auth/components/Guest';

export const GuestPage: React.FC = () => {
  const currentStep = useGuestCurrentStep();
  const profileMethods = useGuestForm();

  // const hondleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  // };

  // const handleUpdateAcount = async () => {
  //   setStep(3);
  // };

  const renderStep = () => {
    switch (currentStep) {
      case GuestStepsEnum.GUEST_USERNAME:
        return <GuestUserName />;
      case GuestStepsEnum.GUEST_INFO:
        return <GuestInfo />;
      case GuestStepsEnum.GUEST_INTERESTS:
        return <GuestInterests />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...profileMethods}>
      <form>{renderStep()}</form>
    </FormProvider>
  );
};
