import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RegisterForm from '../../sections/auth/RegisterForm';
import AuthSocial from '../../sections/auth/AuthSocial';

export default function Register() {
  return (
    <>
      <Stack spacing={2} sx={{ my: 5, position: 'relative' }}>
        <Typography variant='h4'>Get Started with Chatr</Typography>
        <Stack spacing={0.5} flexDirection={'row'}>
          <Typography variant='body2'>
            Already have an Account?{' '}
            <Link
              component={RouterLink}
              to={'/auth/login'}
              variant='subtitle2'
              underline='hover'
            >
              Login
            </Link>
          </Typography>
        </Stack>

        {/* Register form */}
        <RegisterForm />

        {/* Agree Terms */}
        <Typography
          component={'div'}
          sx={{
            color: 'text.secondary',
            mt: 3,
            typography: 'caption',
            textAlign: 'center',
          }}
        >
          {'By Signing up, I agree to '}
          <Link underline='always' color='text.primary'>
            Terms of Service
          </Link>
          {' and '}
          <Link underline='always' color='text.primary'>
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
}
