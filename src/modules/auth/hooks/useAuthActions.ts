import { useMutation } from '@tanstack/react-query';
import {
  useRegisterCurrentStep,
  useRegisterSetStep,
  useRegisterSetUserID,
  useRegisterUserID,
} from '@/modules/auth/store/registerStore';
import { RegisterStepsEnum } from '../types/@auth.types';
import type { RegisterValues } from '../schemas/registerSchema';
import { confirmVerifyAsync, singUpAsync, updateUserAsync, verifyEmailAsync } from '../api/authApi';

export const useAuthActions = () => {
  const currentStep = useRegisterCurrentStep();
  const setStep = useRegisterSetStep();
  const userId = useRegisterUserID();
  const setUserID = useRegisterSetUserID();

  // Create user
  const signUpMutation = useMutation({
    mutationFn: singUpAsync,
    onSuccess: (response) => {
      setUserID(response.user.id);
      console.log('Sign up success:', response);
      setStep(RegisterStepsEnum.EMAIL_VERIFICATION);
    },
    onError: (error) => {
      console.error('Sign up error:', error);
    },
  });

  // Update user
  const updateUserMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: Partial<RegisterValues> }) =>
      updateUserAsync(userId, data),
    onSuccess: (response) => {
      console.log('Update success:', response);
      setStep(RegisterStepsEnum.ENTER_INTERESTS);
    },
    onError: (error) => {
      console.error('Update error:', error);
    },
  });

  // Функція для обробки відправлення форми
  const handleStepSubmit = (data: Partial<RegisterValues>) => {
    console.log('Form submit in hook:', data);
    if (currentStep === RegisterStepsEnum.ENTER_EMAIL) {
      const { email, password, confirmPassword } = data;
      // Відправляємо тільки необхідні поля для першого кроку
      signUpMutation.mutate({
        email,
        password,
        confirmPassword,
      } as RegisterValues);
      return;
    }

    if (!userId) {
      console.warn('No userId found for update');
      return;
    }

    // Для наступних кроків (username, personal info тощо)
    updateUserMutation.mutate({ userId, data });
  };

  const verifyEmailMutation = useMutation({
    mutationFn: (email: string) => verifyEmailAsync(email),
  });

  const confirmCodeMutation = useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      confirmVerifyAsync(email, code),
    onSuccess: () => setStep(RegisterStepsEnum.ENTER_USERNAME), // Або ENTER_PERSONAL_INFO
  });

  return {
    handleStepSubmit,
    isLoading: signUpMutation.isPending || updateUserMutation.isPending,
    error: signUpMutation.error || updateUserMutation.error,
    currentStep,
    userId,
    sendVerification: verifyEmailMutation.mutate,
    confirmCode: confirmCodeMutation.mutate,
    isVerifying: confirmCodeMutation.isPending,
    isSendingCode: verifyEmailMutation.isPending,
    isSendSuccess: verifyEmailMutation.isSuccess,
    confirmError: confirmCodeMutation.error,
  };
};
