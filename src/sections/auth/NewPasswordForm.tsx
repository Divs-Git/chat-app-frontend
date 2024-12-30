import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import { Eye, EyeSlash } from 'phosphor-react';

export default function NewPasswordForm() {
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('New Password is required')
      .max(16)
      .min(8),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
  });

  const defaultValues = {
    newPassword: '',
    confirmPassword: '',
  };

  type FormValues = {
    newPassword: string;
    confirmPassword: string;
    afterSubmit?: string;
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(NewPasswordSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    try {
      // submit data to server
      console.log(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        reset();
        setError('afterSubmit', { type: 'manual', message: error.message });
      } else {
        console.log('An unknown error occurred');
        reset();
        setError('afterSubmit', {
          type: 'manual',
          message: 'An unknown error occurred',
        });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity='error'>{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField
          name='newPassword'
          label='New Password'
          type={showNewPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  edge='end'
                  size='large'
                >
                  {!showNewPassword ? <EyeSlash /> : <Eye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name='confirmPassword'
          label='Confirm Password'
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge='end'
                  size='large'
                >
                  {!showConfirmPassword ? <EyeSlash /> : <Eye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          sx={{
            bgcolor: 'text.primary',
            color: 'white',
            '&:hover': { bgcolor: 'text.secondary' },
          }}
        >
          Submit
        </Button>
      </Stack>
    </FormProvider>
  );
}