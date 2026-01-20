import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '4';

export const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      setToken(token);
      navigate('/dashboard');
    } else {
      navigate('/login?error=auth_failed');
    }
  }, [searchParams, setToken, navigate]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p className="mt-4 text-sm font-medium uppercase text-muted-foreground">Авторизация...</p>
    </div>
  );
};
