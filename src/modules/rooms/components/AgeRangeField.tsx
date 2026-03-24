import { Field, FieldLabel, FieldDescription } from '@/shared/ui/field';
import { Label } from '@/shared/ui/label';
import { Slider } from '@/shared/ui/slider';
import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import type { FormValues } from '../schema/createRoomSchema';

type Props = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const AgeRangeField = ({ control, errors }: Props) => {
  return (
    <Field>
      <FieldLabel className="font-semibold">Age restrictions *</FieldLabel>
      <FieldDescription>Adjust the minimum and maximum age</FieldDescription>
      <Controller
        name="ageRange"
        control={control}
        render={({ field }) => {
          const handleSlider = (value: number[]) => {
            const [min, max] = value;
            if (max - min < 5) return;
            field.onChange([min, max]);
          };
          const getPercent = (value: number) => ((value - 18) / (80 - 18)) * 100;
          return (
            <>
              <Slider
                value={field.value}
                onValueChange={handleSlider}
                min={18}
                max={80}
                step={1}
                className="mx-auto w-full max-w-xs"
              />
              <div className="relative mx-auto mt-1 w-full max-w-xs">
                <Label
                  className="absolute -translate-x-1/2 rounded-md bg-black px-1.5 py-2 text-xs text-white"
                  style={{ left: `${getPercent(field.value[0])}%` }}
                >
                  {field.value[0]}
                </Label>
                <Label
                  className="absolute -translate-x-1/2 rounded-md bg-black px-1.5 py-2 text-xs text-white"
                  style={{ left: `${getPercent(field.value[1])}%` }}
                >
                  {field.value[1]}
                </Label>
              </div>
              {errors.ageRange && <p className="text-sm text-red-500">{errors.ageRange.message}</p>}
            </>
          );
        }}
      />
    </Field>
  );
};
