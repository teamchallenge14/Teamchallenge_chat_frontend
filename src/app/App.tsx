import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="mx-[16px]">
      <Outlet />
    </div>
  );
};

export default App;
