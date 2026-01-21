import App from '@/app/App'; // main app component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainWindow } from './components/MainWindow/MainWindow';
import { Register } from './components/SignUp/Register';
import { LogIn } from './components/LogIn/LogIn';
import { Guest } from './components/Guest/Guest';
import { Reset } from './components/PasswordRecovery/Reset';
import { FinalyWindow } from './components/SignUp/FinalyWindow';
import { PrivateRoute } from '@/modules/auth/components/PrivateRoute';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* PUBLIC PAGES */}
          <Route index element={<MainWindow />} />
          <Route path="/register" element={<Register />} />
          <Route path="/successResiter" element={<FinalyWindow />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/resetPassword" element={<Reset />} />
          <Route path="/guest" element={<Guest />} />

          {/* PRIVATE PAGES (only for authenticated users) */}
          <Route element={<PrivateRoute />}>{/* page /chat, and other pages */}</Route>
        </Route>
      </Routes>
    </Router>
  );
};
