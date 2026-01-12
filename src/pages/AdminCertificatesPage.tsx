import React, { useState, useRef } from 'react';
import { FileText, Printer, Search, CheckCircle } from 'lucide-react';
import type { Animal, RegistrationCertificate } from '../types';

// Datos dummy
const dummyAnimals: Animal[] = [
  {
    id: '1',
    name: 'Torito',
    species: 'Bovino',
    breed: 'Angus',
    birthDate: new Date('2020-03-15'),
    weight: 450,
    gender: 'male',
    color: 'Negro',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-01-15'),
    ownerId: 'user1',
    vetExaminations: [],
    paymentStatus: 'paid'
  },
  {
    id: '2',
    name: 'Lechera Bella',
    species: 'Bovino',
    breed: 'Holstein',
    birthDate: new Date('2019-05-20'),
    weight: 520,
    gender: 'female',
    color: 'Blanco y Negro',
    healthStatus: 'healthy',
    vaccinations: [],
    registrationDate: new Date('2023-02-01'),
    ownerId: 'user2',
    vetExaminations: [],
    paymentStatus: 'paid'
  }
];

const dummyCertificates: RegistrationCertificate[] = [
  {
    id: 'cert-1',
    certificateNumber: 'CERT-2024-001',
    animalId: '1',
    issuedDate: new Date('2024-01-15'),
    issuedBy: 'admin@ejemplo.com',
    digitalSignature: 'SHA256:abc123def456',
    status: 'active'
  }
];

const AdminCertificatesPage: React.FC = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [certificates, setCertificates] = useState<RegistrationCertificate[]>(dummyCertificates);
  const [showPreview, setShowPreview] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState<RegistrationCertificate | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const filteredAnimals = dummyAnimals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateCertificateNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `CERT-${year}${month}${day}-${random}`;
  };

  const generateCertificate = () => {
    if (!selectedAnimal) return;

    const newCertificate: RegistrationCertificate = {
      id: `cert-${Date.now()}`,
      certificateNumber: generateCertificateNumber(),
      animalId: selectedAnimal.id,
      issuedDate: new Date(),
      issuedBy: 'admin@ejemplo.com',
      digitalSignature: `SHA256:${Math.random().toString(36).substring(2, 15)}`,
      status: 'active'
    };

    setCertificates(prev => [newCertificate, ...prev]);
    setCurrentCertificate(newCertificate);
    setShowPreview(true);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow && printRef.current) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Certificado de Registro</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
              .certificate { max-width: 800px; margin: 0 auto; }
              .header { text-align: center; border-bottom: 3px solid #059669; padding-bottom: 20px; }
              .content { padding: 30px 0; }
              .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
              .info-item { margin-bottom: 10px; }
              .label { font-weight: bold; color: #374151; }
              .signature { margin-top: 50px; border-top: 1px solid #000; padding-top: 10px; }
              @media print { body { margin: 0; } }
            </style>
          </head>
          <body>
            ${printRef.current.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const getAnimalById = (animalId: string) => {
    return dummyAnimals.find(animal => animal.id === animalId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestión de Certificados</h1>
        <p className="text-gray-600">Generar e imprimir certificados de registro de animales</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel de selección de animal */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Seleccionar Animal</h2>
          
          {/* Búsqueda */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar animal..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Lista de animales */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredAnimals.map(animal => (
              <div
                key={animal.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnimal?.id === animal.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedAnimal(animal)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{animal.name}</h3>
                    <p className="text-sm text-gray-600">{animal.species} - {animal.breed}</p>
                    <p className="text-xs text-gray-500">ID: {animal.id}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      animal.paymentStatus === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {animal.paymentStatus === 'paid' ? 'Pagado' : 'Pendiente'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de generar certificado */}
          <div className="mt-6">
            <button
              onClick={generateCertificate}
              disabled={!selectedAnimal || selectedAnimal.paymentStatus !== 'paid'}
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Generar Certificado
            </button>
            {selectedAnimal && selectedAnimal.paymentStatus !== 'paid' && (
              <p className="text-sm text-red-600 mt-2 text-center">
                El pago debe estar completado para generar el certificado
              </p>
            )}
          </div>
        </div>

        {/* Panel de certificados generados */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Certificados Emitidos</h2>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {certificates.map(cert => {
              const animal = getAnimalById(cert.animalId);
              return (
                <div
                  key={cert.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{cert.certificateNumber}</h3>
                      <p className="text-sm text-gray-600">{animal?.name}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      cert.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {cert.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-3">
                    Emitido: {cert.issuedDate.toLocaleDateString()}
                  </p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setCurrentCertificate(cert);
                        setShowPreview(true);
                      }}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCertificate(cert);
                        setTimeout(handlePrint, 100);
                      }}
                      className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 flex items-center gap-1"
                    >
                      <Printer size={12} />
                      Imprimir
                    </button>
                  </div>
                </div>
              );
            })}

            {certificates.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No hay certificados emitidos
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal de vista previa del certificado */}
      {showPreview && currentCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Vista Previa del Certificado</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                  >
                    <Printer size={16} />
                    Imprimir
                  </button>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>

            {/* Certificado para imprimir */}
            <div ref={printRef} className="p-8">
              <div className="certificate max-w-4xl mx-auto bg-white">
                {/* Header */}
                <div className="header text-center border-b-4 border-green-600 pb-6 mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    CERTIFICADO DE REGISTRO GANADERO
                  </h1>
                  <p className="text-lg text-gray-600">Sistema Nacional de Registro</p>
                  <div className="mt-4 text-center">
                    <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {currentCertificate.certificateNumber}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="content">
                  {(() => {
                    const animal = getAnimalById(currentCertificate.animalId);
                    if (!animal) return null;
                    
                    return (
                      <>
                        <div className="mb-6 text-center">
                          <p className="text-lg text-gray-700">
                            Este documento certifica que el animal descrito a continuación
                            ha sido debidamente registrado en el Sistema Nacional de Registro Ganadero
                          </p>
                        </div>

                        <div className="info-grid grid grid-cols-2 gap-6 my-8">
                          <div className="space-y-4">
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Nombre del Animal:</span>
                              <div className="text-xl font-semibold text-gray-900">{animal.name}</div>
                            </div>
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Especie:</span>
                              <div className="text-lg text-gray-800">{animal.species}</div>
                            </div>
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Raza:</span>
                              <div className="text-lg text-gray-800">{animal.breed}</div>
                            </div>
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Género:</span>
                              <div className="text-lg text-gray-800">
                                {animal.gender === 'male' ? 'Macho' : 'Hembra'}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Fecha de Nacimiento:</span>
                              <div className="text-lg text-gray-800">{animal.birthDate.toLocaleDateString()}</div>
                            </div>
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Color:</span>
                              <div className="text-lg text-gray-800">{animal.color}</div>
                            </div>
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">Peso:</span>
                              <div className="text-lg text-gray-800">{animal.weight} kg</div>
                            </div>
                            <div className="info-item">
                              <span className="label font-bold text-gray-700">ID de Registro:</span>
                              <div className="text-lg text-gray-800 font-mono">{animal.id}</div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6 mt-8">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <span className="label font-bold text-gray-700">Fecha de Emisión:</span>
                              <div className="text-lg text-gray-800">
                                {currentCertificate.issuedDate.toLocaleDateString()}
                              </div>
                            </div>
                            <div>
                              <span className="label font-bold text-gray-700">Emitido por:</span>
                              <div className="text-lg text-gray-800">{currentCertificate.issuedBy}</div>
                            </div>
                          </div>
                        </div>

                        <div className="signature mt-16 pt-8 border-t border-gray-400">
                          <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                              <div className="border-b border-gray-400 mb-2 pb-2">
                                <div className="h-16 flex items-center justify-center">
                                  <CheckCircle className="text-green-600" size={24} />
                                </div>
                              </div>
                              <p className="font-bold">Firma Digital</p>
                              <p className="text-sm text-gray-600">{currentCertificate.digitalSignature}</p>
                            </div>
                            
                            <div className="text-center">
                              <div className="border-b border-gray-400 mb-2 pb-2">
                                <div className="h-16 flex items-center justify-center">
                                  <div className="w-16 h-16 bg-gray-200 border-2 border-gray-400 flex items-center justify-center text-xs">
                                    QR CODE
                                  </div>
                                </div>
                              </div>
                              <p className="font-bold">Código QR</p>
                              <p className="text-sm text-gray-600">Verificación digital</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-8 text-sm text-gray-500">
                          <p>Este certificado es válido únicamente con firma digital y código QR</p>
                          <p>Para verificar la autenticidad, visite: www.registroganadero.gov</p>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCertificatesPage;