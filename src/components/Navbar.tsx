import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn, LogOut, Menu, Search } from 'lucide-react';

interface NavbarProps {
  currentUser: any;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, onLogout }) => {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y nombre */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white text-green-600 p-2 rounded-full">
                <span className="text-xl font-bold">🐄</span>
              </div>
              <span className="text-xl font-bold">RegistroGanadero</span>
            </Link>
          </div>

          {/* Menú central */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </Link>
              <Link to="/mision" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Misión
              </Link>
              <Link to="/vision" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Visión
              </Link>
              <Link to="/contacto" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
              {currentUser && (
                <Link 
                  to="/dashboard/search" 
                  className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                >
                  <Search size={16} />
                  Buscar
                </Link>
              )}
            </div>
          </div>

          {/* Menú de usuario */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-1 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <User size={18} />
                  <span>{currentUser.name}</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut size={18} />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogIn size={18} />
                  <span>Iniciar sesión</span>
                </Link>
                <Link
                  to="/register"
                  className="bg-green-800 hover:bg-green-900 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="hover:bg-green-700 p-2 rounded-md">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;