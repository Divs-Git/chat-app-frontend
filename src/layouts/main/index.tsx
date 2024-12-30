import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo/chat-icon.webp';

export default function MainLayout() {
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth={'sm'}>
        <Stack spacing={5}>
          <Stack sx={{ width: '100%' }} alignItems={'center'}>
            <img style={{ height: 100, width: 100 }} src={Logo} alt='logo' />
          </Stack>
        </Stack>

        <Outlet />
      </Container>
    </>
  );
}
