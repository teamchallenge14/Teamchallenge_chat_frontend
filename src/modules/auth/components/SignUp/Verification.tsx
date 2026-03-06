import React from 'react';
import { Button } from '../../../../shared/ui/Button/button';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useRegisterSetStep } from '@/modules/auth/store/registerStore';
import { RegisterStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';
import { InputField } from '@/shared/ui/InputField';
import type { RegisterValues } from '../../schemas';
import { useAuthActions } from '../../hooks';

export const Verification: React.FC = () => {
  const setRegisterStep = useRegisterSetStep();
  const { control, getValues } = useFormContext<RegisterValues>();

  // Використовуємо useWatch, щоб кнопка Verify реагувала на введення коду миттєво
  const codeValue = useWatch({ control, name: 'code' }) || '';
  const email = getValues('email');

  const { sendVerification, confirmCode, isVerifying, isSendingCode, isSendSuccess, confirmError } =
    useAuthActions();

  const hasSentCode = React.useRef(false);

  // Автоматична відправка при вході на сторінку
  React.useEffect(() => {
    if (email && !hasSentCode.current) {
      hasSentCode.current = true;
      sendVerification(email);
    }
  }, [email, sendVerification]);

  const handleConfirm = () => {
    if (codeValue.length === 6) {
      confirmCode({ email, code: codeValue });
    }
  };

  const handleResend = () => {
    sendVerification(email);
  };

  const navToEmailEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterStep(RegisterStepsEnum.EMAIL_EDIT);
  };

  return (
    <AuthLayout step={RegisterStepsEnum.EMAIL_VERIFICATION}>
      <div className="flex w-full flex-col gap-[16px]">
        <Controller
          name="code"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              value={field.value}
              id="code"
              fieldType="OTP"
              isError={!!fieldState.error || !!confirmError}
              errorMessage={confirmError ? 'Failed to send code. Please try again' : undefined}
            />
          )}
        />
        <Button
          variant="default"
          onClick={handleConfirm}
          type="button"
          disabled={codeValue.length !== 6}
        >
          {isVerifying ? 'Verifying...' : 'Verify'}
        </Button>

        <div className="flex justify-between text-center text-sm text-gray-600">
          Didn't receive the code?
          <button
            onClick={handleResend}
            type="button"
            className="font-semibold text-black underline hover:no-underline disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSendingCode ? 'Sending...' : 'Resend'}
          </button>
        </div>

        <div className="flex justify-between text-center text-sm text-gray-600">
          Entered the wrong email?
          <button
            onClick={(e) => navToEmailEdit(e)}
            type="button"
            className="font-semibold text-black underline hover:no-underline disabled:cursor-not-allowed disabled:opacity-50"
          >
            Edit Email
          </button>
        </div>

        {isSendSuccess && (
          <p className="text-center text-sm text-green-600">New code sent! Check your email.</p>
        )}

        {/* {confirmError && (
          <p className="text-center text-sm text-red-600">Failed to send code. Please try again.</p>
        )} */}
      </div>
    </AuthLayout>
  );
};
