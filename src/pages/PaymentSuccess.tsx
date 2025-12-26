import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface PaymentSuccessProps {
  onNavigate: (page: string) => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onNavigate }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id');

  useEffect(() => {
    // À la réussite du paiement, créer une commande et un achat dans le localStorage
    try {
      const rawItems = localStorage.getItem('lastOrderItems');
      const items = rawItems ? JSON.parse(rawItems) as Array<{ id: number; name: string; price: number; quantity: number; image: string; }> : [];

      if (items.length > 0) {
        const now = new Date();
        const id = String(now.getTime());
        const orderNumber = `BG-${now.getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
        const total = items.reduce((sum, it) => sum + (Number(it.price) * Number(it.quantity)), 0);

        const userName = localStorage.getItem('userName') || 'Client BG';
        const userPhone = localStorage.getItem('userPhone') || '+237 6XX XXX XXX';
        const userAddress = localStorage.getItem('userAddress') || 'Adresse non renseignée';
        const userCity = 'Douala';

        // Construire la commande (OrderHistory.tsx)
        const order = {
          id,
          orderNumber,
          date: now.toISOString().substring(0, 10),
          status: 'confirmed' as const,
          items,
          total,
          shippingAddress: {
            name: userName,
            address: userAddress,
            city: userCity,
            phone: userPhone,
          },
          trackingNumber: undefined,
          estimatedDelivery: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
          timeline: [
            { date: `${now.toISOString().substring(0, 16).replace('T', ' ')}`, status: 'confirmed', description: 'Commande confirmée', completed: true },
            { date: `${new Date(now.getTime() + 60 * 60 * 1000).toISOString().substring(0, 16).replace('T', ' ')}`, status: 'processing', description: 'Commande en préparation', completed: false },
          ],
        };

        // Construire l'achat (MyPurchases.tsx)
        const purchase = {
          id,
          date: now.toISOString().substring(0, 10),
          items,
          total,
          status: 'processing' as const,
          orderNumber,
        };

        // Persister commandes
        try {
          const existingOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
          localStorage.setItem('userOrders', JSON.stringify([order, ...existingOrders]));
        } catch (e) {
          console.warn('Erreur lors de la sauvegarde des commandes:', e);
          localStorage.setItem('userOrders', JSON.stringify([order]));
        }

        // Persister achats
        try {
          const existingPurchases = JSON.parse(localStorage.getItem('userPurchases') || '[]');
          localStorage.setItem('userPurchases', JSON.stringify([purchase, ...existingPurchases]));
        } catch (e) {
          console.warn('Erreur lors de la sauvegarde des achats:', e);
          localStorage.setItem('userPurchases', JSON.stringify([purchase]));
        }

        // Nettoyer les items temporaires
        localStorage.removeItem('lastOrderItems');

        // Optionnel: notifier les composants si déjà chargés
        window.dispatchEvent(new Event('authChange'));
      }
    } catch (e) {
      console.error('Erreur post-paiement:', e);
    }

    console.log('Session ID:', sessionId);
  }, [sessionId]);

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
            onClick={() => onNavigate('home')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;