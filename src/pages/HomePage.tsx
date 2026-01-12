import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Shield, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Registro Ganadero Digital
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              La plataforma más completa para el manejo y registro de tu ganado
            </p>
            <div className="space-x-4">
              <Link 
                to="/register"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Comenzar Gratis
              </Link>
              <Link 
                to="/login"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestro sistema?
            </h2>
            <p className="text-lg text-gray-600">
              Características diseñadas específicamente para ganaderos modernos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Registro Completo</h3>
              <p className="text-gray-600">
                Mantén un registro detallado de cada animal con historial médico completo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Red de Veterinarios</h3>
              <p className="text-gray-600">
                Acceso a veterinarios certificados para el cuidado de tu ganado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguro y Confiable</h3>
              <p className="text-gray-600">
                Datos protegidos con los más altos estándares de seguridad
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reportes Inteligentes</h3>
              <p className="text-gray-600">
                Analiza el rendimiento de tu ganado con reportes detallados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planes que se adaptan a ti
            </h2>
            <p className="text-lg text-gray-600">
              Desde pequeños productores hasta grandes empresas ganaderas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Básico</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29.99</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Hasta 10 animales
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Historial médico básico
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Reportes básicos
                </li>
              </ul>
              <Link 
                to="/dashboard/membership"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center"
              >
                Empezar
              </Link>
            </div>

            {/* Plan Premium */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Más Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$59.99</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Hasta 50 animales
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Historial médico completo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Reportes avanzados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Integración veterinaria
                </li>
              </ul>
              <Link 
                to="/dashboard/membership"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center"
              >
                Empezar
              </Link>
            </div>

            {/* Plan Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$199.99</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Animales ilimitados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  API dedicada
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Soporte 24/7
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Gestor de cuenta
                </li>
              </ul>
              <Link 
                to="/dashboard/membership"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para modernizar tu operación ganadera?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Únete a miles de ganaderos que ya confían en nuestra plataforma
          </p>
          <Link 
            to="/register"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Comenzar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;