// form
import { useFormContext, Controller } from 'react-hook-form';

// @mui
import { Autocomplete, TextField } from '@mui/material';
import { ReactNode } from 'react';

interface InputPropsType {
  endAdornment: ReactNode;
}

interface RHFAutoCompleteProps {
  name: string;
  label?: string;
  type?: string;
  helperText?: ReactNode;
  InputProps?: InputPropsType;
  multiple?: boolean;
  options: string[];
  freeSolo?: boolean;
  ChipProps?: { size: 'small' | 'medium' };
}

export default function RHFAutoComplete({
  name,
  label,
  helperText,
  ...rest
}: RHFAutoCompleteProps) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          options={[]}
          {...field}
          fullWidth
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          onChange={(e, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          {...rest}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
            />
          )}
        />
      )}
    />
  );
}
