import { Controller, useFormContext, type FieldValues, type Path } from 'react-hook-form';

import { Label } from '../../Label';
import { Button } from '../../Button/button';
import { cn } from '@/shared/lib/utils';

type SelectButtonsFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: readonly string[];
  required?: boolean;
};

export const SelectButtonsField = <T extends FieldValues>({
  name,
  label,
  options,
  required,
}: SelectButtonsFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>
            {label} {required && '*'}
          </Label>

          <div className="mt-[12px] flex gap-[14px]" id={name}>
            {options.map((option) => {
              const isActive = field.value === option;

              return (
                <Button
                  key={option}
                  type="button"
                  variant={isActive ? 'destructive' : 'default'}
                  onClick={() => field.onChange(option)}
                  className={cn('capitalize')}
                >
                  {option}
                </Button>
              );
            })}
          </div>

          {fieldState.error && (
            <p className="mt-1 text-left text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
