import { HomePage } from '../pages/HomePage';
import type { RouteObject } from 'react-router-dom';

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
