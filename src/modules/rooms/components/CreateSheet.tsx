import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from '@/shared/ui/sheet';

import { InputGroup, InputGroupInput } from '@/shared/ui/input-group';

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/shared/ui/field';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import { Slider } from '@/shared/ui/slider';
import { Label } from '@shared/ui/label';
import { ScrollArea } from '@shared/ui/scroll-area';
export const CreateSheet = () => {
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [ageRange, setAgeRange] = useState<number[]>([18, 40]);
  const [language, setLanguage] = useState<string>('English');
  const handleButton = (value: boolean) => {
    setIsPublic(value);
  };
  const handleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLanguage(e.currentTarget.value);
  };

  const handleSlider = (value: number[]) => {
    const [newMin, newMax] = value;
    if (newMax - newMin < 5) return;
    setAgeRange(value);
  };

  const getPercent = (value: number) => ((value - 18) / (80 - 18)) * 100;
  return (
    <Sheet>
      <SheetTrigger>
        <img className="absolute bottom-3 right-5 cursor-pointer" src="/img/plus.svg" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 bg-[#fafafa] p-0 pt-0">
        <SheetHeader className="w-full bg-white py-3 pb-5">
          <SheetClose asChild>
            <img src="/img/back.svg" className="absolute left-7 top-7 cursor-pointer" alt="Close" />
          </SheetClose>
          <SheetTitle className="text-center text-lg">Create Room</SheetTitle>
        </SheetHeader>
        <ScrollArea className="min-h-0">
          <FieldSet className="mx-4 flex flex-1 flex-col gap-4 pt-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="" className="font-semibold">
                  Room Photo
                </FieldLabel>
                <h3 className="self-center">Avatar</h3>
              </Field>
              <Field>
                <FieldLabel htmlFor="" className="font-semibold">
                  Room Name *
                </FieldLabel>
                <InputGroup className="focus-within:border-muted bg-white shadow-sm">
                  <InputGroupInput
                    className="placeholder:text-muted-foreground text-base outline-none"
                    placeholder="Enter room name"
                  />
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="" className="font-semibold">
                  Room Type *
                </FieldLabel>
                <div className="flex gap-3">
                  <Button
                    className="shadow-md"
                    variant={isPublic ? 'default' : 'outline'}
                    onClick={() => handleButton(true)}
                  >
                    Public
                  </Button>
                  <Button
                    className="shadow-md"
                    variant={!isPublic ? 'default' : 'outline'}
                    onClick={() => handleButton(false)}
                  >
                    Private
                  </Button>
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="" className="font-semibold">
                  Age restrictions *
                </FieldLabel>
                <FieldDescription>Adjust the minimum and maximum age</FieldDescription>
                <Slider
                  value={ageRange}
                  onValueChange={(ranger) => handleSlider(ranger)}
                  min={18}
                  max={80}
                  step={1}
                  className="mx-auto w-full max-w-xs"
                />

                <div className="relative mx-auto mt-1 w-full max-w-xs">
                  <Label
                    className="absolute -translate-x-1/2 rounded-md bg-black px-1.5 py-2 text-xs text-white"
                    style={{ left: `${getPercent(ageRange[0])}%` }}
                  >
                    {ageRange[0]}
                  </Label>
                  <Label
                    className="absolute -translate-x-1/2 rounded-md bg-black px-1.5 py-2 text-xs text-white"
                    style={{ left: `${getPercent(ageRange[1])}%` }}
                  >
                    {ageRange[1]}
                  </Label>
                </div>
              </Field>
              <Field className="mt-7">
                <FieldLabel htmlFor="" className="font-semibold">
                  Language
                </FieldLabel>
                <div className="flex gap-3">
                  <Button
                    className="shadow-md"
                    value={'English'}
                    variant={language == 'English' ? 'default' : 'outline'}
                    onClick={handleLanguage}
                  >
                    Ukrainian
                  </Button>
                  <Button
                    className="shadow-md"
                    value={'Ukrainian'}
                    variant={language == 'Ukrainian' ? 'default' : 'outline'}
                    onClick={handleLanguage}
                  >
                    English
                  </Button>
                </div>
              </Field>
            </FieldGroup>
            <Field className="gap-1">
              <FieldLabel htmlFor="" className="font-semibold">
                Categories *
              </FieldLabel>
              <FieldDescription className="">
                Categories are auto-selected based on your interests
              </FieldDescription>
            </Field>
          </FieldSet>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
