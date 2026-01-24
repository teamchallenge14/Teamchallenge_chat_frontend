import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  // clearable = false, // очищення поля
  placeholder,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [value, setValue] = useState(propValue || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    propOnChange?.(e);
  };
  return (
    <input
      {...props}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      className="box-border h-[36px] w-full rounded-[6px] border border-[#E5E5E5] bg-transparent pl-2.5 text-lg font-normal text-[#615b52]"
    />
  );
};
