// import { GuestInfo } from './GuestInfo';
// import { FormProvider } from 'react-hook-form';
// import { useMutation } from '@tanstack/react-query';
// import { useEffect } from 'react';
// import {
//   useAuthResetUserID,
//   useAuthSetUserID,
//   useAuthUserID,
//   useGuestCurrentStep,
//   useGuestSetStep,
// } from '../../store/authStore';
// import { GuestStepsEnum } from '../../types/@auth.types';
// import { guestAuth, updateQuest } from '../../api/apiGuest';
// import type { GuestSchemaValues } from '../../schemas';
// import { GuestInterests } from './GuestInterests';
// import { useGuestForm } from '../../hooks';
// import { GuestUserName } from './GuestUserName';

// export const Guest = () => {
//   const setStep = useGuestSetStep();
//   const currentStep = useGuestCurrentStep();
//   const userId = useAuthUserID();
//   const setUserId = useAuthSetUserID();
//   const resetUserID = useAuthResetUserID();
//   const profileMethods = useGuestForm();

//   useEffect(() => {
//     setStep(GuestStepsEnum.GUEST_USERNAME);
//     resetUserID();
//   }, []);

//   const guestMutation = useMutation({
//     mutationFn: guestAuth,
//     onSuccess: (responce) => {
//       setUserId(responce.user.id);
//       setStep(GuestStepsEnum.GUEST_INFO);
//     },
//   });

//   const updateUserMutation = useMutation({
//     mutationFn: ({ userId, data }: { userId: string; data: GuestSchemaValues }) =>
//       updateQuest(userId, data),
//     onSuccess: (response) => {
//       console.log('update success:', response);
//       setStep(GuestStepsEnum.GUEST_INTERESTS);
//     },
//     onError: (error) => {
//       console.error('update error:', error);
//     },
//   });

//   const handleUsernameSubmit = () => {
//     const login = profileMethods.getValues('login');
//     guestMutation.mutate(login);
//   };

//   const handleUpdateAccount = async (data: GuestSchemaValues) => {
//     if (!userId) {
//       console.error('User ID is missing');
//       return;
//     }

//     updateUserMutation.mutate({ userId, data });
//   };

//   return (
//     <FormProvider {...profileMethods}>
//       <form onSubmit={profileMethods.handleSubmit(handleUpdateAccount)}>
//         {currentStep === GuestStepsEnum.GUEST_USERNAME && (
//           <GuestUserName onContinue={handleUsernameSubmit} />
//         )}
//         {currentStep === GuestStepsEnum.GUEST_INFO && <GuestInfo />}
//         {currentStep === GuestStepsEnum.GUEST_INTERESTS && <GuestInterests />}
//       </form>
//     </FormProvider>
//   );
// };
