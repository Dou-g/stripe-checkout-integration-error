import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface PaymentSuccessProps {
  onNavigate: (page: string) => void;
}

export default function PaymentSuccess({ onNavigate }: PaymentSuccessProps) {
  useEffect(() => {
    // Réinitialiser le panier ici si nécessaire
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Paiement réussi !
        </h2>
        <p className="mt-2 text-gray-600">
          Merci pour votre achat. Vous recevrez bientôt un email de confirmation.
        </p>
        <div className="mt-6">
          <button
            onClick={() => onNavigate('shop')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  );
}