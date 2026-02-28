import { GuestUserName } from './GuestUserName';
import { GuestInfo } from './GuestInfo';
import { FormProvider } from 'react-hook-form';
import { GuestInteres } from './GuestInterest';
import { useMutation } from '@tanstack/react-query';
import { guestAuth, updateQuest } from '@/app/api/api';
import { useQuestForm } from '@/features/auth/model/use-guest-form';
import type { QuestValues } from '@/features/auth/model/quest-schema';
import { useSetUserID, useUserID } from '@/store/user-store';
import { GuestStepEnum } from '@/store/@types';
import { useGuestCurrentStep, useGuestSetStep } from '@/store/quest-store';
import { useEffect } from 'react';

export const Guest = () => {
  const setStep = useGuestSetStep();
  const currentStep = useGuestCurrentStep();

  // const [userId, setUserId] = useState<string | null>(null);
  const userId = useUserID();
  const setUserId = useSetUserID();
  // console.log(setUserId);
  const profileMethods = useQuestForm();

  useEffect(() => {
    setStep(GuestStepEnum.ENTER_USERNAME);
    setUserId(null);
  }, []);

  const guestMutation = useMutation({
    mutationFn: guestAuth,
    onSuccess: (responce) => {
      setUserId(responce.user.id);
      setStep(GuestStepEnum.ENTER_INFO);
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: QuestValues }) =>
      updateQuest(userId, data),
    onSuccess: (response) => {
      console.log('update success:', response);
      setStep(GuestStepEnum.ENTER_INTERESS);
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
      {currentStep === GuestStepEnum.ENTER_USERNAME && <GuestUserName onSubmit={hondleSubmit} />}

      {currentStep !== GuestStepEnum.ENTER_USERNAME && (
        <FormProvider {...profileMethods}>
          <form onSubmit={profileMethods.handleSubmit(handleUpdateAcount)}>
            {currentStep === GuestStepEnum.ENTER_INFO && <GuestInfo />}
            {currentStep === GuestStepEnum.ENTER_INTERESS && <GuestInteres />}
          </form>
        </FormProvider>
      )}
    </>
  );
};
