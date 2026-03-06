import React from 'react';
import { NavLink } from 'react-router-dom';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import { RegisterStepsEnum } from '@/modules/auth/types/@auth.types';
import { AuthLayout } from '@/modules/auth/layouts';
import { Button, InputField, SocialAuth } from '@/shared/ui';
import { AppRoutesEnum } from '@/shared/constants';
import type { RegisterValues } from '@/modules/auth/schemas';
import { useAuthActions } from '@/modules/auth/hooks';

export const EmailPassword: React.FC = () => {
  const { control, trigger, getValues } = useFormContext<RegisterValues>();
  const { touchedFields } = useFormState({ control });

  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  const { handleStepSubmit, isLoading } = useAuthActions();

  const handleNext = async () => {
    setIsSubmitted(true);

    const isStepValid = await trigger(['email', 'password', 'confirmPassword']);

    if (isStepValid) {
      const values = getValues();
      handleStepSubmit(values);
    }
  };

  const shouldShowError = (field: keyof RegisterValues, hasError: boolean) =>
    hasError && (touchedFields[field] || isSubmitted);

  return (
    <AuthLayout step={RegisterStepsEnum.ENTER_EMAIL}>
      <div className="flex w-full flex-col gap-[16px]">
        <fieldset className="flex flex-col gap-[16px]">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                id="email"
                label="Email"
                type="email"
                fieldType="email"
                placeholder="example@gmail.com"
                isError={shouldShowError('email', fieldState.invalid)}
                errorMessage={
                  shouldShowError('email', fieldState.invalid)
                    ? fieldState.error?.message
                    : undefined
                }
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                id="password"
                label="Password"
                type="password"
                fieldType="password"
                placeholder="Enter your password"
                isInfo
                infoText="At least 8 characters"
                isError={shouldShowError('password', fieldState.invalid)}
                errorMessage={
                  shouldShowError('password', fieldState.invalid)
                    ? fieldState.error?.message
                    : undefined
                }
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                id="confirmPassword"
                label="Confirm password"
                fieldType="password"
                placeholder="Confirm your password"
                isError={shouldShowError('confirmPassword', fieldState.invalid)}
                errorMessage={
                  shouldShowError('confirmPassword', fieldState.invalid)
                    ? fieldState.error?.message
                    : undefined
                }
              />
            )}
          />
        </fieldset>

        <Button type="button" onClick={handleNext} variant="default" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Next'}
        </Button>

        <div className="flex justify-between">
          <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
            Already have an account?
          </p>
          <NavLink to={`/${AppRoutesEnum.LOGIN}`}>
            <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Log In</p>
          </NavLink>
        </div>
      </div>

      <div className="mt-12 w-full pb-6">
        <SocialAuth />
      </div>
    </AuthLayout>
  );
};
