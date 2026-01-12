import React, { useState } from 'react';
import { Search, Plus, Check, X, Eye, Mail, Phone, Filter } from 'lucide-react';
import { mockVeterinarians } from '../data/mockData';

interface AdminVeterinariansPageProps {
  currentUser: any;
}

const AdminVeterinariansPage: React.FC<AdminVeterinariansPageProps> = ({ currentUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newVet, setNewVet] = useState({
    name: '',
    licenseNumber: '',
    specialization: '',
    phone: '',
    email: ''
  });

  const filteredVeterinarians = mockVeterinarians.filter(vet => {
    const matchesSearch = vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vet.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vet.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'active' && vet.isActive) ||
                         (filterStatus === 'inactive' && !vet.isActive);
    return matchesSearch && matchesFilter;
  });

  const handleApproveVet = (vetId: string) => {
    alert(`Veterinario aprobado: ${vetId}`);
    // Aquí iría la lógica para aprobar
  };

  const handleRejectVet = (vetId: string) => {
    alert(`Veterinario rechazado: ${vetId}`);
    // Aquí iría la lógica para rechazar
  };

  const handleAddVet = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Nuevo veterinario agregado exitosamente');
    setShowAddModal(false);
    setNewVet({ name: '', licenseNumber: '', specialization: '', phone: '', email: '' });
  };

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <Check size={12} className="mr-1" />
        Activo
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <X size={12} className="mr-1" />
        Inactivo
      </span>
    );
  };

  // Solo mostrar si el usuario es admin
  if (currentUser?.role !== 'admin') {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Acceso Denegado</h2>
        <p className="text-gray-600">No tienes permisos para acceder a esta sección.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Veterinarios</h1>
            <p className="text-gray-600">Administra los veterinarios aprobados en la plataforma</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={16} />
            <span>Agregar Veterinario</span>
          </button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Veterinarios</p>
              <p className="text-2xl font-bold text-gray-900">{mockVeterinarians.length}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <span className="text-blue-600 text-2xl">👩‍⚕️</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Activos</p>
              <p className="text-2xl font-bold text-green-600">
                {mockVeterinarians.filter(v => v.isActive).length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <Check className="text-green-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inactivos</p>
              <p className="text-2xl font-bold text-red-600">
                {mockVeterinarians.filter(v => !v.isActive).length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-red-100">
              <X className="text-red-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Especializaciones</p>
              <p className="text-2xl font-bold text-purple-600">
                {new Set(mockVeterinarians.map(v => v.specialization)).size}
              </p>
            </div>
            <div className="p-3 rounded-full bg-purple-100">
              <span className="text-purple-600 text-2xl">🎯</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre, licencia o especialización..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
            >
              <option value="all">Todos los estados</option>
              <option value="active">Activos</option>
              <option value="inactive">Inactivos</option>
            </select>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            Resultados: {filteredVeterinarians.length} veterinarios
          </div>
        </div>
      </div>

      {/* Lista de veterinarios */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {filteredVeterinarians.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">👩‍⚕️</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No se encontraron veterinarios
            </h3>
            <p className="text-gray-600">
              {searchTerm || filterStatus !== 'all' 
                ? 'Intenta cambiar los filtros de búsqueda' 
                : 'Añade el primer veterinario a la plataforma'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Veterinario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Licencia y Especialización
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aprobación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVeterinarians.map((vet) => (
                  <tr key={vet.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            {vet.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{vet.name}</div>
                          <div className="text-sm text-gray-500">ID: {vet.id}</div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{vet.licenseNumber}</div>
                      <div className="text-sm text-gray-500">{vet.specialization}</div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900 mb-1">
                        <Mail size={14} className="mr-2 text-gray-400" />
                        {vet.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone size={14} className="mr-2 text-gray-400" />
                        {vet.phone}
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(vet.isActive)}
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(vet.approvalDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        por Admin
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                          title="Ver detalles"
                        >
                          <Eye size={16} />
                        </button>
                        
                        {vet.isActive ? (
                          <button 
                            onClick={() => handleRejectVet(vet.id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                            title="Desactivar"
                          >
                            <X size={16} />
                          </button>
                        ) : (
                          <button 
                            onClick={() => handleApproveVet(vet.id)}
                            className="text-green-600 hover:text-green-900 transition-colors"
                            title="Activar"
                          >
                            <Check size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal para agregar veterinario */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Agregar Nuevo Veterinario</h3>
            
            <form onSubmit={handleAddVet} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={newVet.name}
                  onChange={(e) => setNewVet({ ...newVet, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Dr. Juan Pérez"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Licencia *
                </label>
                <input
                  type="text"
                  required
                  value={newVet.licenseNumber}
                  onChange={(e) => setNewVet({ ...newVet, licenseNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="VET-2024-001"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Especialización *
                </label>
                <input
                  type="text"
                  required
                  value={newVet.specialization}
                  onChange={(e) => setNewVet({ ...newVet, specialization: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Medicina Bovina"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={newVet.phone}
                  onChange={(e) => setNewVet({ ...newVet, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={newVet.email}
                  onChange={(e) => setNewVet({ ...newVet, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="veterinario@ejemplo.com"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Agregar Veterinario
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVeterinariansPage;