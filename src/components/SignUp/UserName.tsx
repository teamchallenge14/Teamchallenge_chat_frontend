import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { useFormContext } from 'react-hook-form';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
import { RegisterLayout } from '../ui/layouts';
import { RegisterStepsEnum } from '@/store/@types';

export const UserName: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterInitialValues>();

  return (
    <RegisterLayout step={RegisterStepsEnum.ENTER_USERNAME}>
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
    </RegisterLayout>
  );
};
