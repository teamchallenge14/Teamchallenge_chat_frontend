import App from '@/app/App'; // main app component
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainWindow } from './components/MainWindow/MainWindow';
import { Register } from './components/SingUp/Register';
import { LogIn } from './components/LogIn/LogIn';
import { Guest } from './components/Guest/Guest';
import { AuthCallback } from '@/modules/auth/pages/AuthCallback';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainWindow />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Route>
      </Routes>
    </Router>
  );
};
