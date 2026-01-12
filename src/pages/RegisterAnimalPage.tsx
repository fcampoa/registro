import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Calendar, Scale, Palette } from 'lucide-react';
import PayPalButton from '../components/PayPalButton';

const RegisterAnimalPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Información básica
    name: '',
    species: '',
    breed: '',
    birthDate: '',
    gender: '',
    color: '',
    weight: '',
    
    // Información de salud
    healthStatus: 'healthy',
    vaccinations: [],
    lastVetVisit: '',
    notes: '',
    
    // Documentos
    photos: [],
    certificates: [],
    
    // Ubicación
    currentLocation: '',
    previousLocations: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío
    alert('Animal registrado exitosamente');
    navigate('/dashboard/animals');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Información Básica</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre del Animal *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ej: Luna, Toro Bravo"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Especie *
          </label>
          <select
            name="species"
            required
            value={formData.species}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Seleccionar especie</option>
            <option value="Bovino">Bovino</option>
            <option value="Porcino">Porcino</option>
            <option value="Ovino">Ovino</option>
            <option value="Caprino">Caprino</option>
            <option value="Equino">Equino</option>
            <option value="Aviar">Aviar</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raza *
          </label>
          <input
            type="text"
            name="breed"
            required
            value={formData.breed}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ej: Holstein, Angus, Jersey"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline mr-2" size={16} />
            Fecha de Nacimiento *
          </label>
          <input
            type="date"
            name="birthDate"
            required
            value={formData.birthDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Género *
          </label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Seleccionar género</option>
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Palette className="inline mr-2" size={16} />
            Color
          </label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ej: Negro y blanco"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Scale className="inline mr-2" size={16} />
            Peso (kg)
          </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ej: 450"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Información de Salud</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Estado de Salud Actual
        </label>
        <select
          name="healthStatus"
          value={formData.healthStatus}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="healthy">Sano</option>
          <option value="sick">Enfermo</option>
          <option value="under-treatment">En tratamiento</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Última Visita Veterinaria
        </label>
        <input
          type="date"
          name="lastVetVisit"
          value={formData.lastVetVisit}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Vacunas Aplicadas
        </label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="vaccine1" className="h-4 w-4 text-green-600 rounded" />
            <label htmlFor="vaccine1" className="ml-2 text-sm text-gray-700">Fiebre Aftosa</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="vaccine2" className="h-4 w-4 text-green-600 rounded" />
            <label htmlFor="vaccine2" className="ml-2 text-sm text-gray-700">Brucelosis</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="vaccine3" className="h-4 w-4 text-green-600 rounded" />
            <label htmlFor="vaccine3" className="ml-2 text-sm text-gray-700">Tuberculosis</label>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notas de Salud
        </label>
        <textarea
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Observaciones, tratamientos especiales, alergias, etc."
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Documentos y Fotos</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fotos del Animal
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Arrastra fotos aquí o haz clic para seleccionar</p>
            <input type="file" multiple accept="image/*" className="hidden" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certificados Médicos
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Sube certificados veterinarios</p>
            <input type="file" multiple accept=".pdf,.jpg,.png" className="hidden" />
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Documentos Recomendados:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Certificado de vacunación</li>
          <li>• Examen médico veterinario</li>
          <li>• Certificado de origen</li>
          <li>• Historial genético (si está disponible)</li>
        </ul>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Ubicación y Confirmación</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ubicación Actual
        </label>
        <input
          type="text"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Ej: Rancho San José, Parcela 3"
        />
      </div>
      
      {/* Resumen del registro */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Resumen del Registro</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Nombre:</strong> {formData.name || 'Sin especificar'}</p>
            <p><strong>Especie:</strong> {formData.species || 'Sin especificar'}</p>
            <p><strong>Raza:</strong> {formData.breed || 'Sin especificar'}</p>
            <p><strong>Género:</strong> {formData.gender === 'male' ? 'Macho' : formData.gender === 'female' ? 'Hembra' : 'Sin especificar'}</p>
          </div>
          <div>
            <p><strong>Fecha de nacimiento:</strong> {formData.birthDate || 'Sin especificar'}</p>
            <p><strong>Peso:</strong> {formData.weight ? `${formData.weight} kg` : 'Sin especificar'}</p>
            <p><strong>Color:</strong> {formData.color || 'Sin especificar'}</p>
            <p><strong>Estado de salud:</strong> {formData.healthStatus === 'healthy' ? 'Sano' : formData.healthStatus === 'sick' ? 'Enfermo' : 'En tratamiento'}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-yellow-800 mb-2">⚠️ Costo del Registro:</h4>
        <p className="text-sm text-yellow-700">
          El registro de este animal tiene un costo de <strong>$25.00 USD</strong> que se procesará 
          a través de PayPal una vez completado el formulario.
        </p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/dashboard/animals')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Registrar Nuevo Animal</h1>
            <p className="text-gray-600">Completa la información para registrar un animal</p>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
              }`}>
                {step}
              </div>
              {step < 4 && (
                <div className={`w-24 h-1 mx-2 ${
                  currentStep > step ? 'bg-green-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 text-xs text-center text-gray-600">
          <span>Información Básica</span>
          <span>Salud</span>
          <span>Documentos</span>
          <span>Confirmación</span>
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Anterior
            </button>
            
            {currentStep === 4 ? (
              <div className="flex flex-col space-y-4">
                <PayPalButton
                  amount={25.00}
                  description={`Registro de animal: ${formData.name || 'Nuevo animal'}`}
                  onSuccess={(details) => {
                    alert(`Animal registrado exitosamente! ID de pago: ${details.id}`);
                    navigate('/dashboard/animals');
                  }}
                  onCancel={() => {
                    // El usuario puede quedarse en la página si cancela
                  }}
                />
                <p className="text-xs text-gray-500 text-center">
                  Al proceder, aceptas nuestros términos y condiciones
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Siguiente
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAnimalPage;