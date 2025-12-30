// import { Button } from '@/components/ui/button';
// import { MainWindow } from '@/components/MainWindow/MainWindow';
import { Outlet } from 'react-router-dom';

function App() {
  // const [openSingUp, setOpenSingUp] = useState(false);
  return (
    <div className="mx-[16px]">
      <Outlet />
      {/* <MainWindow /> */}
      {/* {openSingUp && <SingUp />} */}
      Hello
    </div>
  );
}

export default App;
