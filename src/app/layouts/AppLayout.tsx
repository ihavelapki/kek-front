import { Outlet } from 'react-router-dom';

import Navbar from '../../widgets/header';

export const AppLayout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <Navbar />
      </header>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};