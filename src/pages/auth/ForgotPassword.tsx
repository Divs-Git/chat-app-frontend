import { Link, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import ResetPasswordForm from '../../sections/auth/ForgotPasswordForm';

export default function ResetPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ my: 5, position: 'relative' }}>
        <Typography variant='h4' component={'p'}>
          Forget your Password?
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Typography>

        {/* Reset Password Form */}
        <ResetPasswordForm />

        <Link
          component={RouterLink}
          to={'/auth/login'}
          color='inherit'
          variant='subtitle2'
          sx={{
            mt: 3,
            mx: 'auto',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <CaretLeft />
          Back to Login
        </Link>
      </Stack>
    </>
  );
}
