import * as React from 'react';
import { cn } from '@/shared/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={cn(
          'box-border h-[36px] w-full rounded-[6px] border border-[#E5E5E5] bg-transparent pl-2.5 text-lg font-normal text-[#615b52]',
          className,
        )}
      />
    );
  },
);

Input.displayName = 'Input';
