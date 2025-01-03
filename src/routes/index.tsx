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
        { path: 'group', element: <GroupPage /> },
        { path: 'call', element: <CallPage /> },
        { path: 'settings', element: <Settings /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: '/auth',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <Verify /> },
      ],
    },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import('../pages/dashboard/GeneralApp'))
);

const LoginPage = Loadable(lazy(() => import('../pages/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('../pages/auth/Register')));
const ForgotPassword = Loadable(
  lazy(() => import('../pages/auth/ForgotPassword'))
);
const ResetPassword = Loadable(
  lazy(() => import('../pages/auth/ResetPassword'))
);
const Settings = Loadable(lazy(() => import('../pages/dashboard/Settings')));
const GroupPage = Loadable(lazy(() => import('../pages/dashboard/GroupPage')));
const CallPage = Loadable(lazy(() => import('../pages/dashboard/CallPage')));
const Profile = Loadable(lazy(() => import('../pages/dashboard/Profile')));
const Verify = Loadable(lazy(() => import('../pages/auth/Verify')));
