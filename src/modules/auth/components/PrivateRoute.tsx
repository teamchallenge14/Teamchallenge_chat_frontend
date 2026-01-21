import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/modules/auth/models/useAuthStore';

export const PrivateRoute = () => {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        <span className="ml-2">Access check...</span>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
