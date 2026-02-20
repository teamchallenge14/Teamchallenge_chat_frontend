import React from 'react';
import { InputField } from '../ui';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { Button } from '../ui/button';
import { emailEditSchema, type EmailEditSchemaType } from '@/features/auth/model/register-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterSetStep } from '@/store/register-store';
import { RegisterStepsEnum } from '@/store/@types';
import { RegisterLayout } from '../ui/layouts';

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
    <RegisterLayout step={RegisterStepsEnum.EMAIL_EDIT}>
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
    </RegisterLayout>
  );
};
