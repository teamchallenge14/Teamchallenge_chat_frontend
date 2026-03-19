import { format, type Locale } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { CalendarIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Controller, useFormContext, type FieldValues, type Path } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';
import { Label } from '@/shared/ui/Label';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Button } from '@/shared/ui/Button/button';
import { Calendar } from '@/shared/ui/calendar';

type DatePickerFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder?: string;
  fromYear?: number;
  toYear?: number;
  locale?: Locale;
};

export const DatePickerField = <T extends FieldValues>({
  name,
  label,
  placeholder = 'Pick a date',
  fromYear = 1900,
  toYear = new Date().getFullYear(),
  locale = enUS,
}: DatePickerFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const selectedDate = field.value ? new Date(field.value) : undefined;

        return (
          <div>
            <Label htmlFor={name}>{label}</Label>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-between text-left font-normal',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value ? (
                    format(selectedDate as Date, 'PPP', { locale })
                  ) : (
                    <span>{placeholder}</span>
                  )}

                  <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  defaultMonth={selectedDate ?? new Date(2000, 0)}
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpen(false);
                  }}
                  captionLayout="dropdown"
                  fromYear={fromYear}
                  toYear={toYear}
                  initialFocus
                  locale={locale}
                />
              </PopoverContent>
            </Popover>

            {fieldState.error && (
              <p className="mt-1 text-left text-sm text-red-500">{fieldState.error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};
