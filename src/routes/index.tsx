import { useRoutes } from 'react-router-dom';
import { ComponentType, lazy, Suspense } from 'react';

// layouts
import DashboardLayout from '../layouts/dashboard';
import MainLayout from '../layouts/main';

// loader
import LoadingScreen from '../components/global/LoadingScreen';

// Loadable
const Loadable =
  (Component: ComponentType) => (props: JSX.IntrinsicAttributes) => {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
// routes
export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <GeneralApp /> },
        { path: 'settings', element: <Settings /> },
      ],
    },
    {
      path: '/auth',
      element: <MainLayout />,
      children: [{ path: 'login', element: <LoginPage /> }],
    },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import('../pages/dashboard/GeneralApp'))
);

const LoginPage = Loadable(lazy(() => import('../pages/auth/Login')));

const Settings = Loadable(lazy(() => import('../pages/dashboard/Settings')));
