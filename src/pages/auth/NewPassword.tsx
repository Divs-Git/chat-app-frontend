import { Link, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

export default function NewPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ my: 5, position: 'relative' }}>
        <Typography variant='h4' component={'p'}>
          Reset your Password?
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Please enter your new password. You will be redirected to login page.
        </Typography>
      </Stack>

      {/* New Password Form */}
      <NewPasswordForm />

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
    </>
  );
}
