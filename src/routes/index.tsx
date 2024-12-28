import { useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';

// routes
export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
    },
  ]);
}
