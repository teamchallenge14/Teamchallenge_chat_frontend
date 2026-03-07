import React from 'react';
import { type RegisterValues } from '@/modules/auth/schemas/registerSchema';
import { useFormContext } from 'react-hook-form';
import { SignUpStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';
import { GENDERS } from '@/shared/constants';
import { DatePickerField, FormInput, SelectButtonsField, UploadAvatar, Button } from '@/shared/ui';

export const PersonalInfo: React.FC = () => {
  const { watch } = useFormContext<RegisterValues>();
  // const currentGender = watch('gender');
  const currentBio = watch('description');

  return (
    <AuthLayout flow={'signup'} step={SignUpStepsEnum.ENTER_PERSONAL_INFO}>
      <div className="mt-[22px] flex flex-col items-center justify-center">
        <div className="w-full max-w-md text-center">
          <UploadAvatar />

          <div className="flex w-full flex-col gap-4">
            <FormInput name="firstName" label="Name *" placeholder="John" fieldType={'text'} />
            <FormInput name="lastName" label="Surname *" placeholder="Doe" fieldType={'text'} />
            <DatePickerField name="birthDate" label="Date of birth *" />
            <SelectButtonsField name="gender" label="Gender" options={GENDERS} required />
            <FormInput
              name="description"
              label="Bio"
              placeholder="Your feedback helps us improve..."
              fieldType={'textarea'}
              maxLength={150}
            />
          </div>
          <p className="mt-[12px] text-left text-[12px] font-medium leading-[100%] text-[#A3A3A3]">
            {(currentBio as string)?.length || 0}/150 characters
          </p>
          <Button variant="default" className="mt-[16px] w-full">
            Continue
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};
