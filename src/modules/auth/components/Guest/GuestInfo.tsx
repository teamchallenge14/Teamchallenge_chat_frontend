import React from 'react';
import { useFormContext } from 'react-hook-form';
import { GENDERS } from '@/shared/constants';
import { AuthLayout } from '../../layouts';
import { GuestStepsEnum } from '../../types/@auth.types';
import { DatePickerField, SelectButtonsField, UploadAvatar, Button, FormInput } from '@/shared/ui';
import type { GuestSchemaValues } from '../../schemas';

interface GuestInfoProps {
  onContinue: (data: GuestSchemaValues) => void;
}

export const GuestInfo: React.FC<GuestInfoProps> = ({ onContinue }) => {
  const { watch, handleSubmit } = useFormContext<GuestSchemaValues>();
  const currentBio = watch('description');

  const handleNext = handleSubmit((data) => {
    onContinue(data);
  });
  return (
    <AuthLayout flow={'guest'} step={GuestStepsEnum.GUEST_INFO}>
      <div className="mt-[22px] flex flex-col items-center justify-center">
        <div className="w-full max-w-md text-center">
          <UploadAvatar />
          <div className="flex w-full flex-col gap-4">
            <FormInput name="firstName" label="Name *" placeholder="John" fieldType={'text'} />
            <FormInput name="lastName" label="Surname *" placeholder="Doe" fieldType={'text'} />
            <DatePickerField name="birthDate" label="Date of birth" />
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
            {currentBio?.length || 0}/150 characters
          </p>
          <Button variant="default" className="mt-[16px] w-full" type="submit" onClick={handleNext}>
            Continue
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};
