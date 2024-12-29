import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
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
