import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthLayout } from '../../layouts';
import { AppRoutesEnum } from '@/shared/constants';
import { GuestLimitations } from './GuestLimitations';
import { GuestStepsEnum } from '../../types/@auth.types';
import { useFormContext } from 'react-hook-form';
import type { GuestSchemaValues } from '../../schemas';
import { Button, FormInput } from '@/shared/ui';

interface GuestUserNameProps {
  onContinue: () => void;
}

export const GuestUserName: React.FC<GuestUserNameProps> = ({ onContinue }) => {
  const { trigger } = useFormContext<GuestSchemaValues>();
  console.log('onContinue:', onContinue);
  // const setStep = useGuestSetStep();

  const handleNext = async () => {
    const isValid = await trigger('login', { shouldFocus: true });

    if (isValid) {
      // const values = getValues();
      // console.log('Success:', values);
      // setStep(GuestStepsEnum.GUEST_INFO);
      onContinue();
    } else {
      console.log('Field login is invalid');
    }
  };

  return (
    <AuthLayout flow={'guest'} step={GuestStepsEnum.GUEST_USERNAME}>
      <div className="flex w-full flex-col gap-[16px]">
        <FormInput name="login" label="Login *" fieldType="text" id="login" />

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
