import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { MainTitle } from '../ui/MainTitle';
import { loginSchema } from '@/features/auth/model/register-schema';
import { InputField } from '../ui';
import { useRegisterSetStep } from '@/store/register-store';
import { RegisterStepsEnum } from '@/store/@types';

export const UserName: React.FC = () => {
  const setRegisterStep = useRegisterSetStep();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
    },
  });

  const onNext = () => {
    setRegisterStep(RegisterStepsEnum.EMAIL_VERIFICATION);
  };

  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext<RegisterInitialValues>();

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Email Verification " />
      <Progress.Root
        className="relative h-[8px] w-full overflow-hidden rounded-full bg-gray-200"
        value={66}
      >
        <Progress.Indicator
          className="h-full bg-black transition-transform"
          style={{ transform: 'translateX(-85%)' }}
        />
      </Progress.Root>
      <div className="flex flex-1 flex-col justify-center overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Choose a Username"
              description="This name will be visible to others in chats"
            />
            <div className="flex w-full flex-col gap-[16px]">
              {/* <div>
                <Label htmlFor="username">Username *</Label>
                <Input id="username" type="text" placeholder="Bob" {...register('login')} />
                {errors.login && <p className="">{errors.login.message}</p>}
              </div> */}
              <Controller
                name="username"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    {...field}
                    id="username"
                    label="Username *"
                    fieldType="text"
                    placeholder="Bob"
                    errorMessage={fieldState.error?.message}
                    isError={!!fieldState.error}
                  />
                )}
              />
            </div>
            <Button variant="default" className="mt-[16px]" onClick={handleSubmit(onNext)}>
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
