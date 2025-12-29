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
      className="w-full box-border h-[36px] border border-[#E5E5E5] rounded-[6px] bg-transparent font-normal text-lg pl-2.5 text-[#615b52]"
    />
  );
};
