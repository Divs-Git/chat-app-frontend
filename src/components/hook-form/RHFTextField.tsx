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
  multiline?: boolean;
  maxrow?: number;
}

export default function RHFTextField({
  name,
  label,
  type,
  helperText,
  maxrow = 1,
  ...rest
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          maxRows={maxrow}
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
