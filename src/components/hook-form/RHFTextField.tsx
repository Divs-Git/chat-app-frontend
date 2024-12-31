// form
import { useFormContext, Controller } from 'react-hook-form';

// @mui
import { TextField } from '@mui/material';
import { ReactNode } from 'react';

interface InputPropsType {
  endAdornment: ReactNode;
}

interface RHFTextFieldProps {
  name: string;
  label?: string;
  type?: string;
  helperText?: ReactNode;
  InputProps?: InputPropsType;
}

export default function RHFTextField({
  name,
  label,
  type,
  helperText,
  ...rest
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          {...field}
          type={type}
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          fullWidth
          error={!!error}
          helperText={error ? error.message : helperText}
          {...rest}
        />
      )}
    />
  );
}
