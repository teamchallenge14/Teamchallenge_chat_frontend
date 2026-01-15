import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '../models/useAuthStore'; // Убедись, что путь верный

export const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    // 1. Извлекаем параметр 'token' из URL (например: ?token=abc...)
    const token = searchParams.get('token');

    if (token) {
      // 2. Если токен есть, сохраняем его в Zustand
      setToken(token);
      
      // 3. Улетаем в защищенную часть приложения
      navigate('/dashboard'); 
    } else {
      // 4. Если токена нет — что-то пошло не так, возвращаем на логин
      console.error('Не удалось получить токен авторизации');
      navigate('/login?error=auth_failed');
    }
  }, [searchParams, setToken, navigate]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {/* Простой лоадер из Tailwind/Shadcn */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p className="mt-4 text-sm font-medium text-muted-foreground uppercase">
        Авторизация...
      </p>
    </div>
  );
};