import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import { Alert, Button, Stack } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import { ForgotPassword } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

export default function ForgotPasswordForm() {
  const dispatch = useDispatch<AppDispatch>();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
  });

  const defaultValues = {
    email: 'dummy@gmail.com',
  };

  type FormValues = {
    email: string;
    afterSubmit?: string;
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(ResetPasswordSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    try {
      // submit data to server
      dispatch(ForgotPassword(data));
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
        <RHFTextField name='email' label='Email Address' />

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
          Send Request
        </Button>
      </Stack>
    </FormProvider>
  );
}
