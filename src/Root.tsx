import App from '@/app/App'; // main app component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainWindow } from './components/MainWindow/MainWindow';
import { Lobby } from './components/Lobby/Lobby';
import { Register } from './components/SignUp/Register';
import { LogIn } from './components/LogIn/LogIn';
import { Guest } from './components/Guest/Guest';
import { Reset } from './components/PasswordRecovery/Reset';
import { FinalyWindow } from './components/SignUp/FinalyWindow';
// import { MainPage } from '@/modules/auth/pages/MainPage';

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainWindow />} />
            <Route path="/home" element={<Lobby />} />
            <Route path="/register" element={<Register />} />
            <Route path="/successResiter" element={<FinalyWindow />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/resetPassword" element={<Reset />} />
            <Route path="/guest" element={<Guest />} />
            {/* <Route path="/chat" element={<MainPage />} /> */}

            {/* DEV route for UI work */}
            {import.meta.env.DEV && <Route path="dev/lobby" element={<Lobby />} />}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
