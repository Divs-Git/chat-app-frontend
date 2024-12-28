import { useRoutes } from 'react-router-dom';
import { ComponentType, lazy, Suspense } from 'react';

// layouts
import DashboardLayout from '../layouts/dashboard';

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
      children: [{ path: 'app', element: <GeneralApp /> }],
    },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import('../pages/dashboard/GeneralApp'))
);
