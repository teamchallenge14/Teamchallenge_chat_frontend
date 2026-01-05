import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import React, { useState } from 'react';
import { sexOptions } from '@/types/Gender';
import { Dropdown } from '../ui/selectDemo';

interface Step4Props {
  onNext: () => void;
}

export const Step4: React.FC<Step4Props> = ({ onNext }) => {
  const [selectedSex, setSelectedSex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      <Header title="Complete Profile" />

      {/* Прогрес бар */}
      <Progress.Root
        className="relative h-[8px] w-full overflow-hidden bg-gray-200 rounded-full mb-[22px]"
        value={66}
      >
        <Progress.Indicator
          className="h-full w-full bg-black transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 - 66}%)` }}
        />
      </Progress.Root>

      <div className="flex flex-col items-center justify-center">
        {/*flex-1 */}
        <div className="w-full max-w-md text-center">
          <p className="text-[14px] font-medium leading-[20px] mb-6 text-left">Profile Photo</p>

          <div className="relative inline-block mb-[16px]">
            <div className="w-[100px] h-[100px] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img src="img/user.svg" alt="Profile" className="w-[42px] h-[42px]" />
            </div>

            <Button
              variant="upload"
              className="absolute bottom-0 right-0 w-[36px] h-[36px] min-h-0 p-0 rounded-full bg-[#0A0A0A] text-white hover:bg-[#333333] flex items-center justify-center border-2 border-white"
            >
              <img src="img/camera.svg" alt="Upload photo" className="w-4 h-4" />
            </Button>
          </div>

          {/* <div className="text-center mb-8">
            <h1 className="text-[30px] font-bold leading-[40px] mb-2">Choose a Username</h1>
            <h2 className="font-normal text-[14px] text-gray-600">
              This name will be visible to others in chats
            </h2>
          </div> */}

          <form className="w-full flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" type="text" placeholder="John" />
            </div>
            <div>
              <Label htmlFor="surname">Surname *</Label>
              <Input id="surname" type="text" placeholder="Doe" />
            </div>
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" type="text" placeholder="Bob" />
            </div>
            <div>
              <Dropdown />
              {/* <Label htmlFor="age">Age *</Label>
              <Input id="age" type="text" placeholder="Select your age" /> */}
            </div>
            <div>
              <Label htmlFor="gender">Gender *</Label>
              <div className="flex gap-[14px] mt-[12px]" id="gender">
                {sexOptions.map((option) => (
                  <Button
                    variant={selectedSex === option.id ? 'destructive' : 'default'}
                    key={option.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSex(option.id);
                    }}
                  >
                    {option.name}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                className="w-full h-[80px] resize-none pt-[8px] pt-[12px] pl-[12px]"
                placeholder="Your feedback helps us improve..."
              ></textarea>
            </div>
          </form>
          <p className="text-[12px] font-medium leading-[100%] mt-[12px] text-left text-[#A3A3A3]">
            0/150 characters
          </p>
          <Button variant="default" className="mt-[16px] w-full" onClick={onNext}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
