import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { router } from '@/app/routes/router';

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
