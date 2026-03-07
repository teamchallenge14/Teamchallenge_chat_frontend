import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthLayout } from '../../layouts';
import { AppRoutesEnum } from '@/shared/constants';
import { GuestLimitations } from './GuestLimitations';
import { GuestStepsEnum } from '../../types/@auth.types';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import type { GuestSchemaValues } from '../../schemas';
import { InputField, Button } from '@/shared/ui';
import { useGuestSetStep } from '../../store/authStore';

export const GuestUserName: React.FC = () => {
  const { control } = useFormContext<GuestSchemaValues>();
  const { touchedFields } = useFormState({ control });

  const setStep = useGuestSetStep();

  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  console.log('technical log - setIsSubmitted', setIsSubmitted);

  const shouldShowError = (field: keyof GuestSchemaValues, hasError: boolean) =>
    hasError && (touchedFields[field] || isSubmitted);
  const handleNext = () => {
    setStep(GuestStepsEnum.GUEST_INFO);
  };

  return (
    <AuthLayout flow={'guest'} step={GuestStepsEnum.GUEST_USERNAME}>
      <div className="flex w-full flex-col gap-[16px]">
        <Controller
          name="login"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              id="login"
              label="Login *"
              fieldType="text"
              isError={
                !!fieldState.error && (shouldShowError('login', fieldState.invalid) as boolean)
              }
              errorMessage={
                shouldShowError('login', fieldState.invalid) ? fieldState.error?.message : undefined
              }
            />
          )}
        />
        <p className="text-[12px] font-medium text-[#A3A3A3]">
          This will be your temporary username
        </p>

        <Button variant="default" type="button" onClick={handleNext}>
          Continue as a Guest
        </Button>

        <GuestLimitations />
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-md justify-between pb-8">
        {/* <div className='before:content-[""] before:block before:flex-1 before:h-[1px] before:bg-[#E5E5E5] after:content-[""] after:block after:flex-1 after:h-[1px] after:bg-[#E5E5E5] flex items-center gap-3 mb-[32px]'>
             <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
           </div>
            */}
        <p>Want full features? </p>
        <NavLink to={`/${AppRoutesEnum.REGISTER}`}>
          <p>Sign Up</p>
        </NavLink>
      </div>
    </AuthLayout>
  );
};
