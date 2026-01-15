import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '@/modules/auth/models/useAuthStore';

export const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);

  useEffect(() => {
    const token = searchParams.get('token');
    console.log("token:", token);

    if (token) {
      setToken(token);
      navigate('/');
    } else {
      navigate('/login?error=auth_failed');
    }
  }, [searchParams, setToken, navigate]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
};
