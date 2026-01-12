import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { mockMemberships } from '../data/mockData';
import PayPalButton from '../components/PayPalButton';

interface MembershipPageProps {
  currentUser: any;
}

const MembershipPage: React.FC<MembershipPageProps> = ({ currentUser }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleSelectPlan = (membershipId: string) => {
    setSelectedPlan(membershipId);
  };

  const getMembershipPrice = (membership: any) => {
    if (billingCycle === 'yearly') {
      return (membership.price * 10).toFixed(2); // 2 meses gratis en plan anual
    }
    return membership.price.toFixed(2);
  };

  const getPlanColor = (type: string) => {
    switch (type) {
      case 'basic':
        return 'border-blue-200 bg-blue-50';
      case 'premium':
        return 'border-green-200 bg-green-50 ring-2 ring-green-500';
      case 'enterprise':
        return 'border-purple-200 bg-purple-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getPlanBadgeColor = (type: string) => {
    switch (type) {
      case 'basic':
        return 'bg-blue-600';
      case 'premium':
        return 'bg-green-600';
      case 'enterprise':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Planes y Membresías</h1>
        <p className="text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
      </div>

      {/* Plan actual */}
      {currentUser?.membership && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tu Plan Actual</h3>
          <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
            <div>
              <h4 className="text-lg font-semibold text-green-900 capitalize">
                Plan {currentUser.membership.type}
              </h4>
              <p className="text-sm text-green-700">
                ${currentUser.membership.price}/mes • Hasta {currentUser.membership.animalsAllowed} animales
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <Check size={16} className="mr-1" />
                Activo
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Selector de ciclo de facturación */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Ciclo de Facturación</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-md transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-md transition-colors relative ${
              billingCycle === 'yearly'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Anual
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              -20%
            </span>
          </button>
        </div>
        {billingCycle === 'yearly' && (
          <p className="text-sm text-green-600 mt-2">
            🎉 Ahorra 2 meses con el plan anual
          </p>
        )}
      </div>

      {/* Planes disponibles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockMemberships.map((membership) => (
          <div
            key={membership.id}
            className={`relative rounded-lg p-6 transition-all cursor-pointer ${
              getPlanColor(membership.type)
            } ${
              selectedPlan === membership.id ? 'ring-2 ring-offset-2 ring-green-500' : ''
            }`}
            onClick={() => handleSelectPlan(membership.id)}
          >
            {membership.type === 'premium' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star size={14} />
                  <span>Más Popular</span>
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 capitalize mb-2">
                Plan {membership.type}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${getMembershipPrice(membership)}
                </span>
                <span className="text-gray-600">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
              </div>
              {billingCycle === 'yearly' && (
                <p className="text-sm text-gray-600 line-through">
                  ${(membership.price * 12).toFixed(2)}/año
                </p>
              )}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Check className="text-green-600 mr-2" size={16} />
                <span>
                  {membership.animalsAllowed === -1 
                    ? 'Animales ilimitados' 
                    : `Hasta ${membership.animalsAllowed} animales`}
                </span>
              </div>
              {membership.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <Check className="text-green-600 mr-2" size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
                  getPlanBadgeColor(membership.type)
                } text-white hover:opacity-90 ${
                  currentUser?.membership?.type === membership.type ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentUser?.membership?.type === membership.type}
              >
                {currentUser?.membership?.type === membership.type
                  ? 'Plan Actual'
                  : 'Seleccionar Plan'
                }
              </button>
              
              {selectedPlan === membership.id && currentUser?.membership?.type !== membership.type && (
                <PayPalButton
                  amount={parseFloat(getMembershipPrice(membership))}
                  description={`Plan ${membership.type} - ${billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`}
                  onSuccess={(details) => {
                    alert(`Pago exitoso! ID: ${details.id}`);
                    setSelectedPlan(null);
                  }}
                  onCancel={() => setSelectedPlan(null)}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comparación de planes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Comparación de Planes</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Característica</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Básico</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Premium</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-700">Número de animales</td>
                  <td className="py-3 px-4 text-sm text-center">10</td>
                  <td className="py-3 px-4 text-sm text-center">50</td>
                  <td className="py-3 px-4 text-sm text-center">Ilimitados</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-700">Historial médico</td>
                  <td className="py-3 px-4 text-sm text-center">
                    <Check className="mx-auto text-green-600" size={16} />
                  </td>
                  <td className="py-3 px-4 text-sm text-center">
                    <Check className="mx-auto text-green-600" size={16} />
                  </td>
                  <td className="py-3 px-4 text-sm text-center">
                    <Check className="mx-auto text-green-600" size={16} />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-700">Reportes avanzados</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-400">—</td>
                  <td className="py-3 px-4 text-sm text-center">
                    <Check className="mx-auto text-green-600" size={16} />
                  </td>
                  <td className="py-3 px-4 text-sm text-center">
                    <Check className="mx-auto text-green-600" size={16} />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-700">API dedicada</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-400">—</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-400">—</td>
                  <td className="py-3 px-4 text-sm text-center">
                    <Check className="mx-auto text-green-600" size={16} />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-700">Soporte</td>
                  <td className="py-3 px-4 text-sm text-center">Email</td>
                  <td className="py-3 px-4 text-sm text-center">Prioritario</td>
                  <td className="py-3 px-4 text-sm text-center">24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Información de pago */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg font-medium text-blue-900 mb-2">Métodos de Pago Aceptados</h4>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-white p-2 rounded border">
            <span className="text-blue-600 font-bold">PayPal</span>
          </div>
          <div className="bg-white p-2 rounded border">
            <span className="text-gray-700">Visa</span>
          </div>
          <div className="bg-white p-2 rounded border">
            <span className="text-gray-700">Mastercard</span>
          </div>
        </div>
        <p className="text-sm text-blue-700">
          🔒 Todos los pagos son procesados de forma segura a través de PayPal. 
          Puedes cancelar tu suscripción en cualquier momento.
        </p>
      </div>
    </div>
  );
};

export default MembershipPage;