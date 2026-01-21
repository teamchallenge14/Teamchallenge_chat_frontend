// import { Button } from '@/components/ui/button';
// import { MainWindow } from '@/components/MainWindow/MainWindow';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '@/modules/auth/models/useAuthStore';

function App() {
  // const [openSingUp, setOpenSingUp] = useState(false);
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="mx-[16px]">
      <Outlet />
      {/* <MainWindow /> */}
      {/* {openSingUp && <SingUp />} */}
    </div>
  );
}

export default App;
