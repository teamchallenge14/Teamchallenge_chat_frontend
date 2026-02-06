import React from 'react';
import { EyeOpenIcon, EyeClosedIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useDebouncedValue, useShowPassword } from './inputField.hooks';
import { cn } from '@/shared/lib/utils';
import type { InputFieldType } from './inputField.types';

export const InputField: React.FC<InputFieldType> = ({
  id,
  fieldType,
  placeholder,
  label,
  onChange,
  value = '',
  className,
  labelClassName,
  isError,
  errorMessage,
  rows = 4,
  ...props
}) => {
  const [localValue, setLocalValue] = React.useState<string>(value);

  const debouncedValue = useDebouncedValue(localValue, 300);
  const { isShow, toggle: toggleShowPassword } = useShowPassword();

  const isPasswordField = fieldType === 'password';
  const isTextarea = fieldType === 'textarea';
  const isSearchField = fieldType === 'search';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setLocalValue(e.target.value);

  React.useEffect(() => {
    if (debouncedValue !== undefined) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  React.useEffect(() => {
    setLocalValue(value || '');
  }, [value]);

  return (
    <div className={cn('mb-5 w-full transition-all', className)}>
      {label && (
        <label className={cn('flex text-left text-sm font-medium', labelClassName)} htmlFor={id}>
          <span className="mb-[12px] block">{label}</span>
        </label>
      )}
      <div className="relative">
        {isTextarea ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            id={id}
            aria-invalid={isError || undefined}
            aria-describedby={isError ? `${id}-error` : undefined}
            value={localValue}
            onChange={handleChange}
            placeholder={placeholder}
            rows={rows}
            autoComplete={id}
            className={cn(
              'box-border w-full rounded-[6px] border border-[#E5E5E5] bg-transparent pl-2.5 pr-2.5 text-lg font-normal text-[#615b52]',
              isError && 'border-error text-error',
            )}
          />
        ) : (
          <>
            {isSearchField && (
              <MagnifyingGlassIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#615b52]" />
            )}
            <input
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
              id={id}
              value={localValue}
              aria-invalid={isError || undefined}
              aria-describedby={isError ? `${id}-error` : undefined}
              onChange={handleChange}
              placeholder={placeholder}
              autoComplete={fieldType}
              type={isPasswordField && isShow ? 'text' : fieldType}
              className={cn(
                'box-border h-[36px] w-full rounded-[6px] border border-[#E5E5E5] bg-transparent pl-2.5 text-lg font-normal text-[#615b52]',
                isSearchField && 'pl-8',
                isError && 'border-error text-error',
                isPasswordField ? 'pr-10' : 'pr-2.5',
              )}
            />
            {isPasswordField && (
              <button
                type="button"
                aria-label={!isShow ? 'show password' : 'hide password'}
                title={!isShow ? 'show password' : 'hide password'}
                onClick={toggleShowPassword}
                className={cn('absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer')}
              >
                {isShow ? (
                  <EyeOpenIcon
                    className={'stroke-[var(--color-foreground)] text-[var(--color-foreground)]'}
                  />
                ) : (
                  <EyeClosedIcon className={'stroke-[var(--color-foreground)]'} />
                )}
              </button>
            )}
          </>
        )}
        {isError && (
          <div
            id={`${id}-error`}
            role="alert"
            className="text-error absolute -bottom-4 left-0 pl-1 text-left text-xs font-bold"
          >
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};
