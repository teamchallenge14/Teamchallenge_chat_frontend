import { createBrowserRouter } from 'react-router-dom';

import { authRoutes } from '@/modules/auth';
import { homeRoutes } from '@/modules/home';
import { roomRoutes } from '@/modules/rooms';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [...homeRoutes, ...authRoutes, ...roomRoutes],
  },
]);
