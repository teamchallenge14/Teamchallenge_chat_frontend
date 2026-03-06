import React from 'react';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { Button } from '../../../../shared/ui/Button/button';
import { emailEditSchema, type EmailEditSchemaType } from '@/modules/auth/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterSetStep } from '@/modules/auth/store/registerStore';
import { RegisterStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';
import { InputField } from '@/shared/ui';

export const EmailEdit: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(emailEditSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const setRegisterStep = useRegisterSetStep();

  const { touchedFields, submitCount } = useFormState({ control });

  const shouldShowError = (fieldName: keyof EmailEditSchemaType) =>
    touchedFields[fieldName] || submitCount > 0;

  const onSubmit = async (data: { email: string }) => {
    console.log(data);
    // ToDo if email edit success - change step
    setRegisterStep(RegisterStepsEnum.EMAIL_VERIFICATION);
  };

  return (
    <AuthLayout step={RegisterStepsEnum.EMAIL_EDIT}>
      <div className="flex w-full flex-col gap-[16px]">
        <fieldset>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                id="email"
                label={'New email'}
                fieldType="email"
                type="email"
                placeholder="Email"
                isError={!!fieldState.error && shouldShowError('email')}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Button type="submit" variant="default" onClick={handleSubmit(onSubmit)}>
            Confirm
          </Button>
        </fieldset>
      </div>
    </AuthLayout>
  );
};
