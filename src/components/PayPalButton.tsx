import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface PayPalButtonProps {
  amount: number;
  description: string;
  onSuccess: (details: any) => void;
  onCancel?: () => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, description, onSuccess, onCancel }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    email: '',
    password: ''
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setShowModal(false);
      onSuccess({
        id: `PAYPAL_${Date.now()}`,
        status: 'COMPLETED',
        amount: amount,
        currency: 'USD',
        payer: {
          email: paymentData.email
        },
        create_time: new Date().toISOString()
      });
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        <CreditCard size={20} />
        <span>Pagar con PayPal - ${amount.toFixed(2)}</span>
      </button>

      {/* Modal de PayPal simulado */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">PayPal</span>
                <Lock size={16} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Completar pago
                </h3>
                <div className="bg-gray-50 p-3 rounded border">
                  <p className="text-sm text-gray-600">{description}</p>
                  <p className="text-xl font-bold text-gray-900">${amount.toFixed(2)} USD</p>
                </div>
              </div>

              {!isProcessing ? (
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email de PayPal
                    </label>
                    <input
                      type="email"
                      required
                      value={paymentData.email}
                      onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      required
                      value={paymentData.password}
                      onChange={(e) => setPaymentData({ ...paymentData, password: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-xs text-yellow-800">
                      🔒 Esta es una simulación. En un entorno real, PayPal maneja toda la información de pago de forma segura.
                    </p>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        onCancel?.();
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Pagar Ahora
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Procesando pago...</p>
                  <p className="text-sm text-gray-500">No cierres esta ventana</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PayPalButton;