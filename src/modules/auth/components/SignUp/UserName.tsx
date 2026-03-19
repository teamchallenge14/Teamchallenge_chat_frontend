import React from 'react';
import { SignUpStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';
import { Button, FormInput } from '@/shared/ui';

export const UserName: React.FC = () => {
  const handleNext = async () => {
    // ToDo if step is valid - change step
  };

  return (
    <AuthLayout flow={'signup'} step={SignUpStepsEnum.ENTER_USERNAME}>
      <div className="flex w-full flex-col gap-[16px]">
        <FormInput name="login" label="Login *" fieldType="text" id="login" placeholder="Bob" />
      </div>
      <Button type="button" variant="default" className="mt-[16px]" onClick={handleNext}>
        Verify
      </Button>
    </AuthLayout>
  );
};
