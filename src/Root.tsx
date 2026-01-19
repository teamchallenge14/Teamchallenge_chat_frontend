import App from '@/app/App'; // main app component
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MainWindow } from './components/MainWindow/MainWindow';
import { Register } from './components/SignUp/Register';
import { LogIn } from './components/LogIn/LogIn';
import { Guest } from './components/Guest/Guest';
import { Reset } from './components/PasswordRecovery/Reset';
import { FinalyWindow } from './components/SignUp/FinalyWindow';
import React from 'react';

export const Root = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainWindow />} />
            <Route path="/register" element={<Register />} />
            <Route path="/successResiter" element={<FinalyWindow />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/resetPassword" element={<Reset />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};
