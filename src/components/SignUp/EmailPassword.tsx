import type React from 'react';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { NavLink } from 'react-router-dom';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import { MainTitle } from '../ui/MainTitle';
import { SocialAuth } from '@/modules/auth/components/SocialAuth';
import { type RegisterInitialValues } from '@/features/auth/model/register-schema';
import { InputField } from '../ui';

interface StepProps {
  setStep: (step: number) => void;
}

export const EmailPassword: React.FC<StepProps> = ({ setStep }) => {
  const { control, trigger } = useFormContext<RegisterInitialValues>();

  const { touchedFields, submitCount } = useFormState({ control });

  const onNext = async () => {
    const isValid = await trigger(['email', 'password', 'confirmPassword']);
    if (isValid) {
      setStep(2);
    }
  };

  const shouldShowError = (fieldName: keyof RegisterInitialValues) =>
    touchedFields[fieldName] || submitCount > 0;

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header title="Sing Up" />

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Join ChatApp"
              description="Sign up with your email and password to get started"
            />

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
                      errorMessage={
                        shouldShowError('email') ? fieldState.error?.message : undefined
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
                      isError={!!fieldState.error && shouldShowError('password')}
                      errorMessage={
                        shouldShowError('password') ? fieldState.error?.message : undefined
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
          </div>
        </div>

        <div className="pb-6">
          <SocialAuth />
        </div>
      </div>
    </div>
  );
};
