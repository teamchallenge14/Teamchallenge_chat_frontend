import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { CalendarIcon } from '@radix-ui/react-icons';
import { cn } from '@/shared/lib/utils';
import { Label } from '@/components/ui/Label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import type { RegisterValues } from '../model/register-schema';

export const DateOfBirthField = () => {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<RegisterValues>();
  const currentDateOfBirth = watch('birthDate');
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-between text-left font-normal',
              !currentDateOfBirth && 'text-muted-foreground',
            )}
          >
            {currentDateOfBirth ? (
              format(new Date(currentDateOfBirth), 'PPP', { locale: uk })
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={currentDateOfBirth ? new Date(currentDateOfBirth) : undefined}
            defaultMonth={currentDateOfBirth ? new Date(currentDateOfBirth) : new Date(2000, 0)}
            onSelect={(date) => {
              if (date) {
                setValue('birthDate', date, { shouldValidate: true });
                setOpen(false);
              }
            }}
            captionLayout="dropdown"
            fromYear={1900}
            toYear={new Date().getFullYear()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errors.birthDate && (
        <p className="mt-1 text-left text-sm text-red-500">{errors.birthDate.message}</p>
      )}
    </div>
  );
};
