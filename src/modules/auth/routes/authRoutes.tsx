import { type RouteObject } from 'react-router-dom';
import { LogInPage, SignUpPage } from '../pages';
import { AppRoutesEnum } from '@/shared/constants';

export const authRoutes: RouteObject[] = [
  {
    path: AppRoutesEnum.LOGIN,
    element: <LogInPage />,
  },
  {
    path: AppRoutesEnum.REGISTER,
    element: <SignUpPage />,
  },
  // {
  //   path: 'reset-password',
  //   element: <ResetPasswordPage />,
  // },
  // {
  //   path: 'guest',
  //   element: <GuestPage />,
  // },
];
