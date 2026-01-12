import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardLayout from './components/DashboardLayout';

// Páginas principales
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import VisionPage from './pages/VisionPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Dashboard páginas
import Dashboard from './pages/Dashboard';
import AccountPage from './pages/AccountPage';
import AnimalListPage from './pages/AnimalListPage';
import RegisterAnimalPage from './pages/RegisterAnimalPage';
import MembershipPage from './pages/MembershipPage';

// Admin páginas
import AdminVeterinariansPage from './pages/AdminVeterinariansPage';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleLogin = (user: any) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Rutas públicas con navbar */}
          <Route
            path="/"
            element={
              <>
                <Navbar currentUser={currentUser} onLogout={handleLogout} />
                <HomePage />
              </>
            }
          />
          <Route
            path="/mision"
            element={
              <>
                <Navbar currentUser={currentUser} onLogout={handleLogout} />
                <MissionPage />
              </>
            }
          />
          <Route
            path="/vision"
            element={
              <>
                <Navbar currentUser={currentUser} onLogout={handleLogout} />
                <VisionPage />
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <Navbar currentUser={currentUser} onLogout={handleLogout} />
                <ContactPage />
              </>
            }
          />

          {/* Autenticación */}
          <Route
            path="/login"
            element={
              currentUser ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              currentUser ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <RegisterPage />
              )
            }
          />

          {/* Dashboard con layout */}
          <Route
            path="/dashboard"
            element={
              currentUser ? (
                <DashboardLayout currentUser={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<Dashboard currentUser={currentUser} />} />
            <Route path="account" element={<AccountPage currentUser={currentUser} />} />
            <Route path="animals" element={<AnimalListPage currentUser={currentUser} />} />
            <Route path="register-animal" element={<RegisterAnimalPage />} />
            <Route path="membership" element={<MembershipPage currentUser={currentUser} />} />
          </Route>

          {/* Rutas de administrador */}
          <Route
            path="/admin"
            element={
              currentUser?.role === 'admin' ? (
                <DashboardLayout currentUser={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          >
            <Route index element={<Dashboard currentUser={currentUser} />} />
            <Route path="veterinarians" element={<AdminVeterinariansPage currentUser={currentUser} />} />
          </Route>

          {/* Ruta catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
