import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

interface DashboardLayoutProps {
  currentUser: any;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ currentUser, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar currentUser={currentUser} onLogout={onLogout} />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;