import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { SignUpStepsEnum } from '@/modules/auth/types/@auth.types';
import { AuthLayout } from '@/modules/auth/layouts';
import { Button, FormInput, SocialAuth } from '@/shared/ui';
import { AppRoutesEnum } from '@/shared/constants';
import type { RegisterValues } from '@/modules/auth/schemas';
import { useAuthActions } from '@/modules/auth/hooks';

export const EmailPassword: React.FC = () => {
  const { trigger, getValues } = useFormContext<RegisterValues>();
  const { handleStepSubmit, isLoading } = useAuthActions();

  const handleNext = async () => {
    const isStepValid = await trigger(['email', 'password', 'confirmPassword']);
    if (isStepValid) {
      const values = getValues();
      handleStepSubmit(values);
    }
  };

  return (
    <AuthLayout flow={'signup'} step={SignUpStepsEnum.ENTER_EMAIL}>
      <div className="flex w-full flex-col gap-[16px]">
        <fieldset className="flex flex-col gap-[16px]">
          <FormInput
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            fieldType={'email'}
          />
          <FormInput
            name="password"
            label="Password"
            fieldType={'password'}
            placeholder="Enter your password"
            isInfo
            infoText="At least 8 characters"
          />
          <FormInput
            name="confirmPassword"
            label="Confirm password"
            fieldType={'password'}
            placeholder="Confirm your password"
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
