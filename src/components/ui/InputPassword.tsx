import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const InputPassword: React.FC<InputProps> = ({
  // type = 'text',
  // clearable = false, // очищення поля
  placeholder,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [value, setValue] = useState(propValue || '');
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    propOnChange?.(e);
  };
  return (
    <div className="relative w-full">
      <input
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        className="box-border h-[36px] w-full rounded-[6px] border border-[#E5E5E5] bg-transparent pl-2.5 pr-10 text-lg font-normal text-[#615b52]"
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        {showPassword ? (
          // eye-off
          <img src="img/eye-closed.svg" alt="close-eye" />
        ) : (
          <img src="img/eye-closed.svg" alt="close-eye" />
        )}
      </button>
    </div>
  );
};
