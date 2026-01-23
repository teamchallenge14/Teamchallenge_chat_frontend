// import { Button } from '@/components/ui/button';
// import { MainWindow } from '@/components/MainWindow/MainWindow';
import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/modules/auth/models/useAuthStore';

function App() {
  // const [openSingUp, setOpenSingUp] = useState(false);
  const { user, fetchUser, isInitialized, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (isInitialized && !isLoading) {
      if (user) {
        if (location.pathname === '/' || location.pathname === '/login') {
          navigate('/chat', { replace: true });
        }
      } else {
        if (location.pathname === '/chat') {
          navigate('/login', { replace: true });
        }
      }
    }
  }, [user, isInitialized, isLoading, location.pathname, navigate]);

  if (!isInitialized && isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="mx-[16px]">
      <Outlet />
      {/* <MainWindow /> */}
      {/* {openSingUp && <SingUp />} */}
    </div>
  );
}

export default App;
