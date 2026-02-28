import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { GENDERS } from '@/features/auth/model/register-schema';
import { useFormContext } from 'react-hook-form';
import { DateOfBirthField } from '@/features/auth/ui/DateOfBirthField';
import type { QuestValues } from '@/features/auth/model/quest-schema';
import { Header } from '../ui/Header';

export const GuestInfo = () => {
  const {
    register,
    // formState: { errors },
    watch,
    setValue,
  } = useFormContext<QuestValues>();

  const currentGender = watch('gender');
  const currentBio = watch('description');
  return (
    <div className="mt-[22px] flex flex-col items-center justify-center">
      {/*flex-1 */}
      <div className="w-full max-w-md text-center">
        <Header title="Complete Profile"></Header>
        {/* <p className="mb-6 text-left text-[14px] font-medium leading-[20px]">Complete Profile</p> */}

        <div className="relative mb-[16px] inline-block">
          <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img src="img/user.svg" alt="Profile" className="h-[42px] w-[42px]" />
          </div>

          <Button
            variant="upload"
            className="absolute bottom-0 right-0 flex h-[36px] min-h-0 w-[36px] items-center justify-center rounded-full border-2 border-white bg-[#0A0A0A] p-0 text-white hover:bg-[#333333]"
          >
            <img src="img/camera.svg" alt="Upload photo" className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" type="text" placeholder="John" {...register('firstName')} />
          </div>
          <div>
            <Label htmlFor="surname">Surname *</Label>
            <Input id="surname" type="text" placeholder="Doe" {...register('lastName')} />
          </div>
          <div>
            <DateOfBirthField />
          </div>
          <div>
            <Label htmlFor="gender">Gender *</Label>
            <div className="mt-[12px] flex gap-[14px]" id="gender">
              {GENDERS.map((gender) => (
                <Button
                  variant={currentGender === gender ? 'destructive' : 'default'}
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
              {...register('description')}
              maxLength={150}
            ></textarea>
          </div>
        </div>
        <p className="mt-[12px] text-left text-[12px] font-medium leading-[100%] text-[#A3A3A3]">
          {(currentBio as string)?.length || 0}/150 characters
        </p>
        <Button variant="default" className="mt-[16px] w-full" type="submit">
          Continue
        </Button>
      </div>
    </div>
  );
};
