import { useState } from 'react';
import { GuestUserName } from './GuestUserName';
import { GuestInfo } from './GuestInfo';
import { FormProvider } from 'react-hook-form';
import { GuestInteres } from './GuestInterest';
import { useMutation } from '@tanstack/react-query';
import { guestAuth, updateQuest } from '@/app/api/api';
import { useRegisterSetUserID, useRegisterUserID } from '@/store/register-store';
import { useQuestForm } from '@/features/auth/model/use-guest-form';
import type { QuestValues } from '@/features/auth/model/quest-schema';

export const Guest = () => {
  const [step, setStep] = useState(1);
  // const [userId, setUserId] = useState<string | null>(null);
  const userId = useRegisterUserID();
  const setUserId = useRegisterSetUserID();
  // console.log(setUserId);
  const profileMethods = useQuestForm();

  const guestMutation = useMutation({
    mutationFn: guestAuth,
    onSuccess: (responce) => {
      setUserId(responce.user.id);
      setStep(2);
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: QuestValues }) =>
      updateQuest(userId, data),
    onSuccess: (response) => {
      console.log('update success:', response);
      setStep(3);
    },
    onError: (error) => {
      console.error('update error:', error);
    },
  });

  const hondleSubmit = (login: string) => {
    guestMutation.mutate(login);
  };

  const handleUpdateAcount = async (data: QuestValues) => {
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    updateUserMutation.mutate({ userId, data });
  };
  return (
    <>
      <form>{step === 1 && <GuestUserName onSubmit={hondleSubmit} />}</form>

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
