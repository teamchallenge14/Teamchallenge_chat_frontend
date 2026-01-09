import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { useFormContext } from 'react-hook-form';
import type { RegisterValues } from '@/features/auth';

interface StepPorps {
  setStep: (step: number) => void;
}

export const UserName: React.FC<StepPorps> = ({ setStep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext<RegisterValues>();

  const handleNext = async () => {
    const isValid = await trigger(['login']);
    console.log('Step 4 values after validation:', getValues());
    if (isValid) {
      setStep(4);
    }
  };
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
            <img src="img/user.svg" alt="icon" className="icon mb-5" />
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-[30px] font-bold leading-[40px]">Choose a Username</h1>
              <h2 className="text-[14px] font-normal text-gray-600">
                This name will be visible to others in chats
              </h2>
            </div>
            <div className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="username">Username *</Label>
                <Input id="username" type="text" placeholder="Bob" {...register('login')} />
                {errors.login && <p className="">{errors.login.message}</p>}
              </div>
            </div>
            <Button variant="default" className="mt-[16px]" type="submit" onClick={handleNext}>
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
