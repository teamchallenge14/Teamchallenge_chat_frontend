import React from 'react';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import type { RegisterValues } from '@/modules/auth/schemas/registerSchema';
import { RegisterStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';
import { Button, InputField } from '@/shared/ui';

export const UserName: React.FC = () => {
  const { control } = useFormContext<RegisterValues>();
  const { touchedFields } = useFormState({ control });

  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  const handleNext = async () => {
    setIsSubmitted(true);
    // ToDo if step is valid - change step
  };

  const shouldShowError = (field: keyof RegisterValues, hasError: boolean) =>
    hasError && (touchedFields[field] || isSubmitted);

  return (
    <AuthLayout step={RegisterStepsEnum.ENTER_USERNAME}>
      <div className="flex w-full flex-col gap-[16px]">
        <Controller
          name="login"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              id="login"
              label="Username *"
              fieldType="text"
              placeholder="Bob"
              isError={!!fieldState.error && shouldShowError('login', fieldState.invalid)}
              errorMessage={
                shouldShowError('login', fieldState.invalid) ? fieldState.error?.message : undefined
              }
            />
          )}
        />
      </div>
      <Button type="button" variant="default" className="mt-[16px]" onClick={handleNext}>
        Verify
      </Button>
    </AuthLayout>
  );
};
