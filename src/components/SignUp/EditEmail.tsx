import React from 'react';
import { Header } from '../ui/Header';
import { MainTitle } from '../ui/MainTitle';
import { InputField } from '../ui';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { Button } from '../ui/button';
import { emailEditSchema, type EmailEditSchemaType } from '@/features/auth/model/register-schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const EmailEdit: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(emailEditSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const { touchedFields, submitCount } = useFormState({ control });

  const shouldShowError = (fieldName: keyof EmailEditSchemaType) =>
    touchedFields[fieldName] || submitCount > 0;

  const onSubmit = async (data: { email: string }) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Email Verification" />
      <div className="flex flex-1 flex-col justify-center overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Email Verification"
              description="Enter the correct email and we’ll resend the verification"
            />
            <form className="flex w-full flex-col gap-[16px]" onSubmit={handleSubmit(onSubmit)}>
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
                <Button type="submit" variant="default">
                  Confirm
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
