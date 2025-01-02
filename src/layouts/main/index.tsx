import { Container, Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo/chat-icon.webp';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function MainLayout() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (isLoggedIn) {
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
