import React from 'react';
import { useAuthFetchUser } from '@/modules/auth/store/authStore';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getUserAsync = useAuthFetchUser();

  React.useEffect(() => {
    getUserAsync();
  }, [getUserAsync]);
  return <>{children}</>;
};
