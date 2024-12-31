import { Container, Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo/chat-icon.webp';

const isAuthenticated = true;

export default function MainLayout() {
  if (isAuthenticated) {
    return <Navigate to='/app' />;
  }
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
