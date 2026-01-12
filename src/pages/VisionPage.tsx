import React from 'react';
import { Eye, Lightbulb, Zap, Leaf } from 'lucide-react';

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Eye className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Visión</h1>
          <p className="text-xl text-gray-600">
            El futuro de la ganadería es digital, sostenible y conectado
          </p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Visualizamos un mundo donde cada ganadero, sin importar el tamaño de su operación, 
              tiene acceso a herramientas tecnológicas de clase mundial que transforman la manera 
              en que gestionan su ganado.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Nuestra visión es ser la plataforma líder global en gestión ganadera digital, 
              creando un ecosistema donde la tecnología, la tradición y la sostenibilidad 
              convergen para crear un futuro próspero para la industria ganadera.
            </p>

            <p className="text-lg leading-relaxed">
              Aspiramos a democratizar el acceso a la información y las mejores prácticas, 
              permitiendo que productores de todo el mundo optimicen sus operaciones, 
              mejoren el bienestar animal y contribuyan a un sistema alimentario más 
              sostenible y eficiente.
            </p>
          </div>
        </div>

        {/* Pilares de la visión */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Los pilares de nuestro futuro
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Lightbulb className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovación Constante</h3>
                  <p className="text-gray-700">
                    Desarrollamos continuamente nuevas funcionalidades basadas en 
                    las necesidades reales de nuestros usuarios y las últimas 
                    tendencias tecnológicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Eficiencia Máxima</h3>
                  <p className="text-gray-700">
                    Automatizamos procesos repetitivos y proporcionamos insights 
                    inteligentes que permiten a los ganaderos enfocar su tiempo 
                    en lo que realmente importa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Sostenibilidad</h3>
                  <p className="text-gray-700">
                    Promovemos prácticas ganaderas responsables que protejan 
                    el medio ambiente y aseguren la viabilidad a largo plazo 
                    de la industria.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Eye className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Transparencia Total</h3>
                  <p className="text-gray-700">
                    Creamos trazabilidad completa desde el campo hasta el consumidor, 
                    fortaleciendo la confianza en los productos ganaderos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Construyamos juntos el futuro de la ganadería
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Tu experiencia y nuestro compromiso con la innovación pueden 
            transformar la industria ganadera para las próximas generaciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;