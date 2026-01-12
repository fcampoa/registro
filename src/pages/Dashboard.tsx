import React from 'react';
import { TrendingUp, Users, AlertCircle, DollarSign } from 'lucide-react';
import { mockAnimals } from '../data/mockData';

interface DashboardProps {
  currentUser: any;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  const userAnimals = mockAnimals.filter(animal => animal.ownerId === currentUser?.id);
  const healthyAnimals = userAnimals.filter(animal => animal.healthStatus === 'healthy').length;
  const sickAnimals = userAnimals.filter(animal => animal.healthStatus !== 'healthy').length;
  const pendingPayments = userAnimals.filter(animal => animal.paymentStatus === 'pending').length;

  const stats = [
    {
      name: 'Total de Animales',
      value: userAnimals.length,
      icon: <Users className="h-6 w-6" />,
      color: 'bg-blue-500',
    },
    {
      name: 'Animales Sanos',
      value: healthyAnimals,
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-green-500',
    },
    {
      name: 'Requieren Atención',
      value: sickAnimals,
      icon: <AlertCircle className="h-6 w-6" />,
      color: 'bg-yellow-500',
    },
    {
      name: 'Pagos Pendientes',
      value: pendingPayments,
      icon: <DollarSign className="h-6 w-6" />,
      color: 'bg-red-500',
    },
  ];

  const recentActivity = [
    { id: 1, action: 'Registró nuevo animal', animal: 'Luna', time: 'Hace 2 horas' },
    { id: 2, action: 'Actualizó vacunación', animal: 'Toro Bravo', time: 'Hace 1 día' },
    { id: 3, action: 'Completó examen veterinario', animal: 'Estrella', time: 'Hace 2 días' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Bienvenido, {currentUser?.name}
        </h1>
        <p className="text-gray-600">Resumen de tu operación ganadera</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full text-white ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actividad Reciente */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Actividad Reciente</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action} - {activity.animal}
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alertas */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Alertas Importantes</h3>
            <div className="space-y-4">
              <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">
                      Vacunación pendiente
                    </p>
                    <p className="text-sm text-yellow-700">
                      Luna necesita vacuna contra Brucelosis
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      Pago pendiente
                    </p>
                    <p className="text-sm text-red-700">
                      Estrella - Registro anual $25.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de salud del ganado */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Estado de Salud del Ganado</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{healthyAnimals}</div>
              <div className="text-sm text-gray-600">Sanos</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${userAnimals.length > 0 ? (healthyAnimals / userAnimals.length) * 100 : 0}%` }}
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">
                {userAnimals.filter(a => a.healthStatus === 'under-treatment').length}
              </div>
              <div className="text-sm text-gray-600">En Tratamiento</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-yellow-600 h-2 rounded-full" 
                  style={{ width: `${userAnimals.length > 0 ? (userAnimals.filter(a => a.healthStatus === 'under-treatment').length / userAnimals.length) * 100 : 0}%` }}
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {userAnimals.filter(a => a.healthStatus === 'sick').length}
              </div>
              <div className="text-sm text-gray-600">Enfermos</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-red-600 h-2 rounded-full" 
                  style={{ width: `${userAnimals.length > 0 ? (userAnimals.filter(a => a.healthStatus === 'sick').length / userAnimals.length) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;