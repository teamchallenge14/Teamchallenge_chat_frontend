import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '@/modules/auth/models/useAuthStore';
import { getInterest } from '@/app/api/api';

export const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);

  useEffect(() => {
    const handleAuth = async () => {
      const tokenFromUrl = searchParams.get('token');

      if (tokenFromUrl) {
        console.log('Token found in URL, saving...');
        setToken(tokenFromUrl);
        return navigate('/', { replace: true });
      }

      try {
        console.log('No token in URL, checking cookies...');
        const userData = await getInterest();

        if (userData) {
          return navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        navigate('/login?error=auth_failed');
      }
    };

    handleAuth();
  }, [searchParams, setToken, navigate]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
};
