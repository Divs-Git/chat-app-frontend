import { Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const isAuthenticated = true;

export default function DashboardLayout() {
  if (!isAuthenticated) {
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
