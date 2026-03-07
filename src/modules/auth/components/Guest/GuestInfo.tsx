import { Button } from '../../../../shared/ui/Button/button';
import { Input } from '../../../../shared/ui/Input';
import { Label } from '../../../../shared/ui/Label';
import { Dropdown } from '../../../../shared/ui/selectDemo';
import { type RegisterValues } from '@/modules/auth/schemas/registerSchema';
import type React from 'react';
import { useFormContext } from 'react-hook-form';
import { GENDERS } from '@/shared/constants';
import { AuthLayout } from '../../layouts';
import { GuestStepsEnum } from '../../types/@auth.types';
import { UploadAvatar } from '@/shared/ui';

export const GuestInfo: React.FC = () => {
  const { watch, setValue } = useFormContext<RegisterValues>();

  const currentGender = watch('gender');
  const currentAge = watch('age');
  const currentBio = watch('description');

  const handleNext = () => {
    // setStep(3);
  };

  //ToDo need deep refactor

  return (
    <AuthLayout flow={'guest'} step={GuestStepsEnum.GUEST_INFO}>
      <div className="mt-[22px] flex flex-col items-center justify-center">
        {/*flex-1 */}
        <div className="w-full max-w-md text-center">
          <UploadAvatar />
          <div className="flex w-full flex-col gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="John"
                // {...register('firstName')}
              />
            </div>
            <div>
              <Label htmlFor="surname">Surname *</Label>
              <Input
                id="surname"
                type="text"
                placeholder="Doe"
                // {...register('lastName')}
              />
            </div>
            <div>
              <Label htmlFor="age">Age *</Label>
              <Dropdown
                value={currentAge ? Number(currentAge) : undefined}
                onChange={(value) => setValue('age', value, { shouldValidate: true })}
                // error={errors.age?.message}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender *</Label>
              <div className="mt-[12px] flex gap-[14px]" id="gender">
                {GENDERS.map((gender) => (
                  <Button
                    variant={currentGender === gender ? 'destructive' : 'default'}
                    // variant="default"
                    key={gender}
                    onClick={(e) => {
                      e.preventDefault();
                      setValue('gender', gender, { shouldValidate: true });
                    }}
                  >
                    {gender.charAt(0) + gender.slice(1).toLowerCase()}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                className="h-[80px] w-full resize-none pl-[12px] pt-[12px]"
                placeholder="Your feedback helps us improve..."
                // {...register('description')}
                maxLength={150}
              ></textarea>
            </div>
          </div>
          <p className="mt-[12px] text-left text-[12px] font-medium leading-[100%] text-[#A3A3A3]">
            {(currentBio as string)?.length || 0}/150 characters
            {/* 0/150 characters */}
          </p>
          <Button variant="default" className="mt-[16px] w-full" type="submit" onClick={handleNext}>
            Continue
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};
