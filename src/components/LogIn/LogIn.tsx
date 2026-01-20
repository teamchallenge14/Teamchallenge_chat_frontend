import { Label } from '@radix-ui/react-label';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { NavLink } from 'react-router-dom';
import { useLoginForm, type LoginValues } from '@/features/auth';
import { FormProvider } from 'react-hook-form';
import { logIn } from '@/app/api/api';
import { MainTitle } from '../ui/MainTitle';
import { InputPassword } from '../ui/InputPassword';
import { SocialAuth } from '@/modules/auth/components/SocialAuth';

export const LogIn = () => {
  const methods = useLoginForm();
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
    // trigger,
  } = methods;

  const handleCreateAcount = async (data: LoginValues) => {
    console.log('Форма валідна, дані:', data);
    const allData = getValues();
    try {
      const response = await logIn(allData);
      console.log('logIn up success:', response);
    } catch (error) {
      console.error('logIn up error:', error);
      alert('Помилка логінації. Перевірте дані та спробуйте ще раз.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header title="Log In" />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/user.svg"
              title="Welcome back"
              description="Log in to continue chatting"
            />
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(handleCreateAcount)}
                className="flex w-full flex-col gap-[16px]"
              >
                <div>
                  <Label htmlFor="email" className="mb-[12px]">
                    Email or Username
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    {...register('identifier')}
                  />
                  {errors.identifier && <p className="text-red-500">{errors.identifier.message}</p>}
                </div>
                <div>
                  <div className="mb-[12px] flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <NavLink to="/resetPassword">
                      <p className="text-[14px] font-medium text-[#171717]">Forgot password?</p>
                    </NavLink>
                  </div>
                  <InputPassword
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register('password')}
                  />
                </div>

                <Button variant="default" type="submit">
                  Log In
                </Button>

                <div className="flex justify-between">
                  <p className="text-[14px] font-[400] leading-[20px] text-[#525252]">
                    Don't have an account?
                  </p>
                  <NavLink to="/register">
                    <p className="text-[14px] font-medium leading-[100%] text-[#171717]">Sign Up</p>
                  </NavLink>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>

        <div className="pb-6">
          <SocialAuth />
        </div>
      </div>
    </div>
  );
};
