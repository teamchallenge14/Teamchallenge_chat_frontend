import { RoomPage } from '../pages/RoomPage';
import type { RouteObject } from 'react-router-dom';

export const roomRoutes: RouteObject[] = [
  {
    path: '/rooms',
    element: <RoomPage />,
  },
];
