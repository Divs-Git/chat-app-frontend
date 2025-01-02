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
  Link,
  Stack,
} from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import { LoginUser } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    password: Yup.string().required('Password is required').max(16).min(8),
  });

  const defaultValues = {
    email: 'dummy@gmail.com',
    password: 'dummy123',
  };

  type FormValues = {
    email: string;
    password: string;
    afterSubmit?: string;
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(LoginSchema),
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
      dispatch(LoginUser(data));

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
        <RHFTextField
          name='password'
          label='Password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems={'flex-end'} sx={{ my: 2 }}>
        <Link
          variant='body2'
          color='inherit'
          underline='always'
          component={RouterLink}
          to={'/auth/reset-password'}
        >
          Forgot Password ?
        </Link>
      </Stack>
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
        Login
      </Button>
    </FormProvider>
  );
}
