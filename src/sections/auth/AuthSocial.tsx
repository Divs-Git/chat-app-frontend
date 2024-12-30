import { Box, Divider, IconButton, Stack } from '@mui/material';
import { GithubLogo, GoogleLogo } from 'phosphor-react';
import XLogo from '../../assets/logo/x-logo.svg';

export default function AuthSocial() {
  return (
    <Box>
      <Divider
        sx={{
          typography: 'overline',
          color: 'text.disabled',
          '&::before, &::after': { borderTopStyle: 'dashed' },
        }}
      >
        OR
      </Divider>
      <Stack direction={'row'} spacing={2} justifyContent={'center'}>
        <IconButton>
          <GoogleLogo color='#df3e30' />
        </IconButton>
        <IconButton color='inherit'>
          <GithubLogo />
        </IconButton>
        <IconButton>
          <img src={XLogo} alt='x-logo' width={24} />
        </IconButton>
      </Stack>
    </Box>
  );
}
