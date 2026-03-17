import React from 'react';
import {
  EyeOpenIcon,
  EyeClosedIcon,
  MagnifyingGlassIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useDebouncedValue, useShowPassword } from './inputField.hooks';
import { cn } from '@/shared/lib/utils';
import type { InputFieldType } from './inputField.types';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './InputOTP';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { NavLink } from 'react-router-dom';
import { AppRoutesEnum } from '@/shared/constants/routes';

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
  isInfo,
  infoText,
  passwordReminder,
  ...props
}) => {
  const [localValue, setLocalValue] = React.useState<string>(value);

  const debouncedValue = useDebouncedValue(localValue, 300);
  const { isShow, toggle: toggleShowPassword } = useShowPassword();

  const isPasswordField = fieldType === 'password';
  const isTextarea = fieldType === 'textarea';
  const isSearchField = fieldType === 'search';
  const isOTPField = fieldType === 'OTP';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setLocalValue(e.target.value);

  const handleOTPChange = (newValue: string) => {
    setLocalValue(newValue);
    onChange(newValue);
  };

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
        <div className="flex flex-row justify-between">
          <label
            className={cn(
              'mb-[12px] flex items-center gap-1 text-left text-sm font-medium',
              labelClassName,
            )}
            htmlFor={id}
          >
            <span className="block">{label}</span>
            {isInfo && (
              <Tooltip.Provider delayDuration={200}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button
                      type="button"
                      aria-label={`Info about ${label}`}
                      className="cursor-help text-sky-300 hover:text-sky-500"
                    >
                      <InfoCircledIcon />
                    </button>
                  </Tooltip.Trigger>

                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      align="center"
                      className="max-w-[220px] rounded-md bg-black px-3 py-1.5 text-xs text-white shadow-lg"
                    >
                      {infoText}
                      <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            )}
          </label>
          {passwordReminder && (
            <NavLink to={`/${AppRoutesEnum.RESET_PASSWORD}`} className="hover:opacity-80">
              <p className="text-[14px] font-medium text-[#171717]">Forgot password?</p>
            </NavLink>
          )}
        </div>
      )}
      <div className="relative">
        {isTextarea ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            id={id}
            aria-invalid={!!isError}
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
            {isOTPField ? (
              <>
                <InputOTP
                  value={localValue}
                  onChange={handleOTPChange}
                  id="otp"
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  autoFocus
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </>
            ) : (
              <input
                {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                id={id}
                value={localValue}
                aria-invalid={!!isError}
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
            )}
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
        {isError && errorMessage && (
          <span
            id={`${id}-error`}
            role="alert"
            className={cn(
              'text-error absolute -bottom-4 left-0 pl-1 text-left text-xs font-bold',
              isOTPField && '-bottom-6 block w-[100%] text-center',
            )}
          >
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};
