import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { useFormContext } from 'react-hook-form';
import { MainTitle } from '../ui/MainTitle';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';

interface StepPorps {
  setStep: (step: number) => void;
  // onVerify: () => Promise<void>;
}

export const UserName: React.FC<StepPorps> = () => {
  const {
    register,
    // trigger,
    formState: { errors },
  } = useFormContext<RegisterInitialValues>();

  // const handleVerify = async () => {
  //   const isValid = await trigger('login'); // перевіряємо login
  //   if (isValid) {
  //     await onVerify();
  //   } else {
  //     console.log(errors);
  //   }
  // };
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
              <div>
                <Label htmlFor="username">Username *</Label>
                <Input id="username" type="text" placeholder="Bob" {...register('login')} />
                {errors.login && <p className="">{errors.login.message}</p>}
              </div>
            </div>
            <Button variant="default" className="mt-[16px]" type="submit">
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
