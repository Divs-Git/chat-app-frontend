import { Stack, Typography } from '@mui/material';
import VerifyForm from '../../sections/auth/VerifyForm';

export default function Verify() {
  return (
    <>
      <Stack spacing={2} sx={{ my: 5, position: 'relative' }}>
        <Typography variant='h4'>Please verify your OTP</Typography>
        <Stack direction={'row'} spacing={2}>
          <Typography variant='body2'>
            Send to email (divyansh@gmail.com)
          </Typography>
        </Stack>
      </Stack>

      {/* Verify OTP Form */}
      <VerifyForm />
    </>
  );
}
