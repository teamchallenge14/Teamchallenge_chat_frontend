import { Navigate, type RouteObject } from 'react-router-dom';
import { LobbyPage } from '../pages/LobbyPage';

export const lobbyRoutes: RouteObject[] = [
  {
    path: '/LobbyPage',
    element: <Navigate to="/lobby" replace />,
  },
  {
    path: '/lobby',
    element: <LobbyPage />,
  },
];
