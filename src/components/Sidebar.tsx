import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  List, 
  Plus, 
  CreditCard, 
  Users, 
  Settings,
  ChevronRight,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  currentUser: any;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentUser, onLogout }) => {
  const location = useLocation();

  const userMenuItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: <Home size={20} />
    },
    {
      label: 'Mi Cuenta',
      path: '/dashboard/account',
      icon: <User size={20} />
    },
    {
      label: 'Lista de Ganado',
      path: '/dashboard/animals',
      icon: <List size={20} />
    },
    {
      label: 'Registrar Animal',
      path: '/dashboard/register-animal',
      icon: <Plus size={20} />
    },
    {
      label: 'Membresías',
      path: '/dashboard/membership',
      icon: <CreditCard size={20} />
    }
  ];

  const adminMenuItems = [
    {
      label: 'Administración',
      path: '/admin',
      icon: <Settings size={20} />
    },
    {
      label: 'Veterinarios',
      path: '/admin/veterinarians',
      icon: <Users size={20} />
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      {/* Header del sidebar */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
          <div className="bg-green-600 p-2 rounded-full">
            <User size={20} />
          </div>
          <div>
            <h3 className="font-medium">{currentUser?.name || 'Usuario'}</h3>
            <p className="text-sm text-gray-300 capitalize">{currentUser?.role || 'user'}</p>
          </div>
        </div>
      </div>

      {/* Menú de usuario */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Panel de Usuario
        </h4>
        <nav className="space-y-2">
          {userMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-green-600 text-white'
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {isActive(item.path) && <ChevronRight size={16} className="ml-auto" />}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menú de administrador (solo para admins) */}
      {currentUser?.role === 'admin' && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Administración
          </h4>
          <nav className="space-y-2">
            {adminMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-red-600 text-white'
                    : 'hover:bg-gray-700 text-gray-300'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.path) && <ChevronRight size={16} className="ml-auto" />}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Botón de logout */}
      <div className="mt-auto pt-6">
        <button
          onClick={onLogout}
          className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors"
        >
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;