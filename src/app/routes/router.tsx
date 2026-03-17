import { createBrowserRouter } from 'react-router-dom';

import { authRoutes } from '@/modules/auth';
import { homeRoutes } from '@/modules/home';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [...homeRoutes, ...authRoutes],
  },
]);
