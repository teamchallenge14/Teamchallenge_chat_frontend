import { createBrowserRouter } from 'react-router-dom';

import { authRoutes } from '@/modules/auth';
import { homeRoutes } from '@/modules/home';
import { lobbyRoutes } from '@/modules/Lobby';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [...homeRoutes, ...authRoutes, ...lobbyRoutes],
  },
]);
