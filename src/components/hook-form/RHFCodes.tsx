import { Stack } from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CodeTextField from '../global/CodeTextField';

interface RHFCodesProps {
  keyName?: string;
  inputs?: string[];
}

export default function RHFCodes({
  keyName = '',
  inputs = [],
  ...other
}: RHFCodesProps) {
  const codesRef = useRef(null);
  const { control } = useFormContext();

  function handleChangeWithNextField(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    handleChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
  ): void {
    const target = e.target as HTMLInputElement;
    const { maxLength, value, name } = target;

    const fieldIndex = parseInt(name.replace(keyName, ''), 10);

    const nextField = document.querySelector(
      `input[name=${keyName}${fieldIndex + 1}]`
    ) as HTMLInputElement;

    if (value.length > maxLength) {
      target.value = value[0];
    }

    if (value.length >= maxLength && fieldIndex < 6 && nextField) {
      nextField.focus();
    }

    handleChange(e);
  }
  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      ref={codesRef}
    >
      {inputs.map((name, index) => (
        <Controller
          key={name}
          name={`${keyName}${index + 1}`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CodeTextField
              {...field}
              error={!!error}
              autoFocus={index === 0}
              placeholder='-'
              onFocus={(event) => event.currentTarget.select()}
              onChange={(e) => {
                handleChangeWithNextField(e, field.onChange);
              }}
              slotProps={{
                input: {
                  sx: {
                    width: { xs: 36, sm: 56 },
                    height: { xs: 36, sm: 56 },
                    '& input': { p: 0, textAlign: 'center' },
                  },
                  inputProps: {
                    maxLength: 1,
                    type: 'number',
                  },
                },
              }}
              {...other}
            />
          )}
        />
      ))}
    </Stack>
  );
}
