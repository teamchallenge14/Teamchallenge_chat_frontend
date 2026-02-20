import type React from 'react';
import { Button } from '../ui/button';
import { NavLink } from 'react-router-dom';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import { SocialAuth } from '@/modules/auth/components/SocialAuth';
import { type RegisterInitialValues } from '@/features/auth/model/register-schema';
import { InputField } from '../ui';
import { useRegisterSetStep } from '@/store/register-store';
import { RegisterStepsEnum } from '@/store/@types';
import { RegisterLayout } from '../ui/layouts';

export const EmailPassword: React.FC = () => {
  const { control, trigger } = useFormContext<RegisterInitialValues>();

  const { touchedFields, submitCount } = useFormState({ control });

  const setRegisterStep = useRegisterSetStep();

  const onNext = async () => {
    const isValid = await trigger(['email', 'password', 'confirmPassword']);
    if (isValid) {
      setRegisterStep(RegisterStepsEnum.ENTER_USERNAME);
    }
  };

  const shouldShowError = (fieldName: keyof RegisterInitialValues) =>
    touchedFields[fieldName] || submitCount > 0;

  return (
    <RegisterLayout step={RegisterStepsEnum.ENTER_EMAIL}>
      <div className="flex w-full flex-col gap-[16px]">
        <fieldset>
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
                isError={!!fieldState.error && shouldShowError('email')}
                errorMessage={shouldShowError('email') ? fieldState.error?.message : undefined}
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
                isError={!!fieldState.error && shouldShowError('password')}
                errorMessage={shouldShowError('password') ? fieldState.error?.message : undefined}
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
                isError={!!fieldState.error && shouldShowError('confirmPassword')}
                errorMessage={
                  shouldShowError('confirmPassword') ? fieldState.error?.message : undefined
                }
              />
            )}
          />
        </fieldset>

        <Button type="button" variant="default" onClick={onNext}>
          Next
        </Button>

        <div className="flex justify-between">
          <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
            Already have an account?
          </p>
          <NavLink to="/login">
            <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Log In</p>
          </NavLink>
        </div>
      </div>

      <div className="mt-12 w-full pb-6">
        <SocialAuth />
      </div>
    </RegisterLayout>
  );
};
