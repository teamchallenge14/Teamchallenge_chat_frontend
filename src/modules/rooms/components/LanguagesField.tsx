import { Field, FieldLabel } from '@/shared/ui/field';
import { Controller } from 'react-hook-form';
import { LANGUAGES } from '../constants/languages';
import { Button } from '@/shared/ui/Button/button';

import { type Control, type FieldErrors } from 'react-hook-form';
import type { FormValues } from '../schema/createRoomSchema';

type Props = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const LanguagesField = ({ control, errors }: Props) => {
  return (
    <Field className="mt-7">
      <FieldLabel className="font-semibold">Language</FieldLabel>
      <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <div className="flex gap-3">
            {LANGUAGES.map((lang) => {
              const isSelected = field.value === lang.value;
              return (
                <Button
                  key={lang.value}
                  type="button"
                  className="shadow-md"
                  variant={isSelected ? 'default' : 'outline'}
                  onClick={() => field.onChange(lang.value)}
                >
                  {lang.label}
                </Button>
              );
            })}
          </div>
        )}
      />
      {errors.language && <p className="text-sm text-red-500">{errors.language.message}</p>}
    </Field>
  );
};
