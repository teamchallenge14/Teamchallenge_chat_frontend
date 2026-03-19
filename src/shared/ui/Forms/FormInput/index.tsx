import { Controller, useFormContext, type FieldValues, type Path } from 'react-hook-form';
import { InputField } from '@/shared/ui/InputField';
import type { InputFieldType } from '@/shared/ui/InputField/inputField.types';

type FormInputProps<T extends FieldValues> = Omit<
  InputFieldType,
  'value' | 'onChange' | 'isError' | 'errorMessage' | 'id'
> & {
  name: Path<T>;
  id?: string;
};

export const FormInput = <T extends FieldValues>({ name, id, ...props }: FormInputProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <InputField
          {...(props as InputFieldType)}
          id={id ?? (name as string)}
          value={(field.value ?? '') as string}
          onChange={field.onChange}
          isError={!!fieldState.error && fieldState.isDirty}
          errorMessage={
            !!fieldState.error && fieldState.isDirty ? fieldState.error?.message : undefined
          }
        />
      )}
    />
  );
};
