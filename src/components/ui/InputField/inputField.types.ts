interface IBaseFieldProps {
  id: string;
  onChange: (value: string) => void;
  value?: string;
  fieldType: 'text' | 'password' | 'email' | 'textarea' | 'search';
  rows?: number;
  placeholder?: string;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  isInfo?: boolean;
  infoText?: string;
}

type LabelProps =
  | {
      label: string;
      labelClassName?: string;
    }
  | {
      label?: undefined;
      labelClassName?: never;
    };

type TextareaPropsType = IBaseFieldProps &
  LabelProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> & {
    fieldType: 'textarea';
    rows?: number;
  };

type InputPropsType = IBaseFieldProps &
  LabelProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
    fieldType: 'text' | 'password' | 'email' | 'search';
    rows?: never;
  };

export type InputFieldType = InputPropsType | TextareaPropsType;
