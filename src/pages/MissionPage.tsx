import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const MissionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Target className="text-green-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Misión</h1>
          <p className="text-xl text-gray-600">
            Transformamos la gestión ganadera a través de la tecnología
          </p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              En <strong>RegistroGanadero</strong>, nos dedicamos a revolucionar la industria ganadera 
              mediante soluciones tecnológicas innovadoras que simplifican y optimizan la gestión 
              de ganado para productores de todos los tamaños.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Nuestra misión es proporcionar herramientas digitales accesibles, confiables y 
              fáciles de usar que permitan a los ganaderos mantener registros precisos, 
              monitorear la salud de sus animales y tomar decisiones informadas que mejoren 
              la productividad y el bienestar animal.
            </p>

            <p className="text-lg leading-relaxed">
              Creemos que la tecnología debe servir al campo, no complicarlo. Por eso, 
              desarrollamos soluciones que respetan las tradiciones ganaderas mientras 
              abrazan las posibilidades del futuro digital.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
            <p className="text-gray-600">
              Construimos una red sólida de ganaderos, veterinarios y expertos 
              que se apoyan mutuamente.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Precisión</h3>
            <p className="text-gray-600">
              Proporcionamos datos exactos y herramientas confiables para 
              decisiones informadas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sostenibilidad</h3>
            <p className="text-gray-600">
              Promovemos prácticas sostenibles que beneficien tanto a los 
              productores como al medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;