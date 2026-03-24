import { Button } from '@/shared/ui/Button/button';
import { Field, FieldLabel } from '@/shared/ui/field';
import { Controller } from 'react-hook-form';
import { type Control } from 'react-hook-form';
import type { FormValues } from '../schema/createRoomSchema';

type Props = {
  control: Control<FormValues>;
};

export const RoomTypeField = ({ control }: Props) => {
  return (
    <Field>
      <FieldLabel className="font-semibold">Room Type *</FieldLabel>
      <Controller
        name="isPublic"
        control={control}
        render={({ field }) => (
          <div className="flex gap-3">
            <Button
              type="button"
              className="shadow-md"
              variant={field.value ? 'default' : 'outline'}
              onClick={() => field.onChange(true)}
            >
              Public
            </Button>
            <Button
              type="button"
              className="px-7 shadow-md"
              variant={!field.value ? 'default' : 'outline'}
              onClick={() => field.onChange(false)}
            >
              Private
            </Button>
          </div>
        )}
      />
    </Field>
  );
};
