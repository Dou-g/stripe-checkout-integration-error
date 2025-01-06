import React from 'react';
import { XCircle } from 'lucide-react';

interface PaymentCancelProps {
  onNavigate: (page: string) => void;
}

export default function PaymentCancel({ onNavigate }: PaymentCancelProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <XCircle className="h-20 w-20 text-red-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Paiement annulé
        </h2>
        <p className="mt-2 text-gray-600">
          Le paiement a été annulé. Vous pouvez réessayer ou continuer vos achats.
        </p>
        <div className="mt-6 space-y-4">
          <button
            onClick={() => onNavigate('cart')}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retourner au panier
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  );
}