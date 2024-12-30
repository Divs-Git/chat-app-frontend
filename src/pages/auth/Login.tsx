import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthSocial from '../../sections/auth/AuthSocial';
import LoginForm from '../../sections/auth/LoginForm';
export default function Login() {
  return (
    <>
      <Stack spacing={2} sx={{ my: 5, position: 'relative' }}>
        <Typography variant='h4'>Login to Chatify</Typography>

        <Stack direction={'row'} spacing={'0.5'}>
          <Typography variant='body2'>
            New User?{' '}
            <Link to={'/auth/register'} component={RouterLink}>
              Create an account
            </Link>
          </Typography>
        </Stack>

        {/* Login Form */}
        <LoginForm />

        {/* Social Auth Links */}
        <AuthSocial />
      </Stack>
    </>
  );
}
