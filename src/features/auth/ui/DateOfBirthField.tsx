import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { CalendarIcon } from '@radix-ui/react-icons';
import { cn } from '@/shared/lib/utils';
import { Label } from '@/components/ui/Label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { useFormContext } from 'react-hook-form';
import { useMemo, useState } from 'react';
import type { RegisterValues } from '../model/register-schema';

export const DateOfBirthField = () => {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<RegisterValues>();
  const currentDateOfBirth = watch('birthDate');

  const [month, setMonth] = useState<Date>(
    currentDateOfBirth ? new Date(currentDateOfBirth) : new Date(2000, 0),
  );

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
  }, []);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleYearChange = (year: string) => {
    const newDate = new Date(month);
    newDate.setFullYear(parseInt(year));
    newDate.setDate(1); // Скидаємо день, щоб уникнути помилок при зміні місяця (наприклад, 31 число)
    setMonth(newDate);
  };

  const handleMonthChange = (monthIndex: string) => {
    const newDate = new Date(month);
    newDate.setMonth(parseInt(monthIndex));
    newDate.setDate(1);
    setMonth(newDate);
  };
  return (
    <>
      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'mt-[12px] w-full justify-start text-left font-normal',
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
          <div className="flex gap-2 border-b p-3">
            <Select value={month.getMonth().toString()} onValueChange={handleMonthChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((monthName, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {monthName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={month.getFullYear().toString()} onValueChange={handleYearChange}>
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="single"
            selected={currentDateOfBirth ? new Date(currentDateOfBirth) : undefined}
            onSelect={(date) => {
              if (date) {
                setValue('birthDate', date, { shouldValidate: true });
                setMonth(date);
              }
            }}
            month={month}
            onMonthChange={setMonth}
            classNames={{
              caption: 'hidden',
              nav: 'hidden',
            }}
            fromYear={1900}
            toYear={new Date().getFullYear()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errors.birthDate && (
        <p className="mt-1 text-left text-sm text-red-500">{errors.birthDate.message}</p>
      )}
    </>
  );
};
