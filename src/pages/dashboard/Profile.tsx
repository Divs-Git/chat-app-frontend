import { Box, IconButton, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import ProfileForm from '../../sections/main/ProfileForm';

export default function Profile() {
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* Left section */}
        <Box
          sx={{
            height: '100vh',
            backgroundColor: '#fafaff',
            width: 360,
            boxShadow: '0 0 2px rgba(0,0,0,0.25)',
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
              <IconButton>
                <CaretLeft size={24} color='#4b4b4b' />
              </IconButton>
              <Typography variant='h5'>Profile</Typography>
            </Stack>

            {/* Profile Form*/}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
