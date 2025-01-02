import { Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function DashboardLayout() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to='/auth/login' />;
  }
  return (
    <>
      <Stack direction={'row'}>
        {/* {Sidebar} */}
        <Sidebar />

        {/* {Outlet} */}
        <Outlet />
      </Stack>
    </>
  );
}
