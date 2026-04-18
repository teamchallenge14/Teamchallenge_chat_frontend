/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { useGuestForm } from '../../hooks';
import {
  useAuthResetUserID,
  useAuthSetUserID,
  useAuthUserID,
  useGuestCurrentStep,
  useGuestSetStep,
} from '../../store/authStore';
import { GuestStepsEnum } from '../../types/@auth.types';
import { GuestInfo, GuestInterests, GuestUserName } from '@/modules/auth/components/Guest';
import { useMutation } from '@tanstack/react-query';
import { guestAuth, updateQuest } from '../../api/apiGuest';
import type { GuestSchemaValues } from '../../schemas';

export const GuestPage: React.FC = () => {
  const currentStep = useGuestCurrentStep();
  const profileMethods = useGuestForm();
  const setStep = useGuestSetStep();
  const userId = useAuthUserID();
  const setUserId = useAuthSetUserID();
  const resetUserID = useAuthResetUserID();

  useEffect(() => {
    setStep(GuestStepsEnum.GUEST_USERNAME);
    resetUserID();
  }, []);

  const guestMutation = useMutation({
    mutationFn: guestAuth,
    onSuccess: (response) => {
      setUserId(response.user.id);
      setStep(GuestStepsEnum.GUEST_INFO);
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: ({
      userId,
      data,
    }: {
      userId: string;
      data: Omit<GuestSchemaValues, 'interests'>;
    }) => updateQuest(userId, data),
    onSuccess: () => {
      setStep(GuestStepsEnum.GUEST_INTERESTS);
    },
  });

  const handleUsernameSubmit = () => {
    const login = profileMethods.getValues('login');
    guestMutation.mutate(login);
  };

  const handleUpdateAccount = (data: GuestSchemaValues) => {
    console.log('handleUpdateAccount called', data);
    if (!userId) return;
    const { interests, birthDate, ...rest } = data;
    updateUserMutation.mutate({
      userId,
      data: {
        ...rest,
        birthDate: birthDate ? new Date(birthDate).toISOString().split('T')[0] : undefined,
      } as Omit<GuestSchemaValues, 'interests'>,
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case GuestStepsEnum.GUEST_USERNAME:
        return <GuestUserName onContinue={handleUsernameSubmit} />;
      case GuestStepsEnum.GUEST_INFO:
        return <GuestInfo onContinue={handleUpdateAccount} />;
      case GuestStepsEnum.GUEST_INTERESTS:
        return <GuestInterests />;
      default:
        return null;
    }
  };

  // GuestPage.tsx
  return (
    <FormProvider {...profileMethods}>
      <form
        onSubmit={(e) => {
          console.log('form submit triggered');
          profileMethods.handleSubmit(handleUpdateAccount, (errors) =>
            console.log('validation errors:', errors),
          )(e);
        }}
      >
        {renderStep()}
      </form>
    </FormProvider>
  );
};
