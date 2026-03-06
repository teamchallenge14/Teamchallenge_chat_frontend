import type React from 'react';

import { NavLink } from 'react-router-dom';
import { Controller, FormProvider } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { useLoginForm } from '@/modules/auth/hooks/useLoginForm';
import type { LoginValues } from '@/modules/auth/schemas/loginSchema';
import { InputField, SocialAuth, Button } from '@/shared/ui';
import { logIn } from '@/modules/auth/api/authApi';
import { AuthLayout } from '@/modules/auth/layouts';
import { AppRoutesEnum } from '@/shared/constants/routes';

export const LogInPage: React.FC = () => {
  const methods = useLoginForm();
  const { handleSubmit, control } = methods;

  const logInMutation = useMutation({
    mutationFn: (data: LoginValues) => logIn(data),
    onSuccess: (response) => {
      console.log('logIn up success:', response);
    },
    onError: (error) => {
      console.error('logIn up error:', error);
    },
  });

  const handleCreateAcount = async (data: LoginValues) => {
    console.log('Форма валідна, дані:', data);
    logInMutation.mutate(data);
  };

  return (
    <AuthLayout variant="login">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleCreateAcount)}
          className="flex w-full flex-col gap-[16px]"
        >
          <Controller
            control={control}
            name="identifier"
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                id="email"
                label="Email or Username"
                type="text"
                fieldType="text"
                placeholder="example@gmail.com"
                isError={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                id="password"
                label="Password"
                type="password"
                fieldType="password"
                placeholder="Enter your password"
                isInfo
                passwordReminder
                infoText="At least 8 characters"
                isError={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <Button variant="default" type="submit">
            Log In
          </Button>

          <div className="flex justify-between">
            <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
              Don't have an account?
            </p>
            <NavLink to={`/${AppRoutesEnum.REGISTER}`}>
              <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Sign Up</p>
            </NavLink>
          </div>
        </form>
      </FormProvider>

      <div className="mt-12 w-full pb-6">
        <SocialAuth />
      </div>
    </AuthLayout>
  );
};
