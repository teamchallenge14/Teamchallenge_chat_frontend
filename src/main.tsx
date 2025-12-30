import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app/index.css'; // global styles
import App from '@/app/App'; // main app component
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MainWindow } from './components/MainWindow/MainWindow';
import { Register } from './components/SingUp/Register';
import { LogIn } from './components/LogIn/LogIn';
import { Guest } from './components/Guest/Guest';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainWindow />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/guest" element={<Guest />} />
        </Route>
      </Routes>
    </Router>
    {/* <App /> */}
  </StrictMode>,
);
