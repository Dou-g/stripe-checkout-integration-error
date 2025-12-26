import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ShoppingBag, Package, Truck, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';

interface Purchase {
  id: string;
  date: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderNumber: string;
}

const MyPurchases: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (isAuthenticated) {
      loadPurchases();
    }
  }, [isAuthenticated]);

  const loadPurchases = () => {
    const savedPurchases = localStorage.getItem('userPurchases');
    if (savedPurchases) {
      try {
        const parsedPurchases = JSON.parse(savedPurchases);
        setPurchases(parsedPurchases);
      } catch (error) {
        console.error('Erreur lors du chargement des achats:', error);
        setPurchases([]);
      }
    } else {
      // Données d'exemple pour la démonstration
      const examplePurchases: Purchase[] = [
        {
          id: '1',
          date: '2024-01-15',
          orderNumber: 'BG-2024-001',
          items: [
            {
              id: '1',
              name: 'Robe élégante rouge',
              price: 45000,
              quantity: 1,
              image: '/api/placeholder/100/100'
            },
            {
              id: '2',
              name: 'Sac à main noir',
              price: 25000,
              quantity: 1,
              image: '/api/placeholder/100/100'
            }
          ],
          total: 70000,
          status: 'delivered'
        },
        {
          id: '2',
          date: '2024-01-10',
          orderNumber: 'BG-2024-002',
          items: [
            {
              id: '3',
              name: 'Chemise blanche',
              price: 15000,
              quantity: 2,
              image: '/api/placeholder/100/100'
            }
          ],
          total: 30000,
          status: 'shipped'
        },
        {
          id: '3',
          date: '2024-01-05',
          orderNumber: 'BG-2024-003',
          items: [
            {
              id: '4',
              name: 'Jean slim',
              price: 20000,
              quantity: 1,
              image: '/api/placeholder/100/100'
            }
          ],
          total: 20000,
          status: 'processing'
        }
      ];
      setPurchases(examplePurchases);
      localStorage.setItem('userPurchases', JSON.stringify(examplePurchases));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'processing':
        return <Package className="h-4 w-4 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-4 w-4 text-orange-500" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'En attente';
      case 'processing':
        return 'En traitement';
      case 'shipped':
        return 'Expédié';
      case 'delivered':
        return 'Livré';
      case 'cancelled':
        return 'Annulé';
      default:
        return 'Statut inconnu';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-orange-100 text-orange-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPurchases = purchases.filter(purchase => {
    if (filter === 'all') return true;
    return purchase.status === filter;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-8 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mes achats</h1>
              <p className="text-green-100">Historique de vos commandes</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes ({purchases.length})
            </button>
            <button
              onClick={() => setFilter('delivered')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'delivered'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Livrées ({purchases.filter(p => p.status === 'delivered').length})
            </button>
            <button
              onClick={() => setFilter('shipped')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'shipped'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Expédiées ({purchases.filter(p => p.status === 'shipped').length})
            </button>
            <button
              onClick={() => setFilter('processing')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'processing'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              En cours ({purchases.filter(p => p.status === 'processing').length})
            </button>
          </div>
        </div>

        {/* Purchases List */}
        <div className="p-6">
          {filteredPurchases.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun achat trouvé</h3>
              <p className="text-gray-500">
                {filter === 'all'
                  ? "Vous n'avez pas encore effectué d'achat."
                  : `Aucun achat avec le statut "${getStatusText(filter)}".`
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPurchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(purchase.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                          {getStatusText(purchase.status)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Commande #{purchase.orderNumber}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {formatPrice(purchase.total)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(purchase.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {purchase.items.slice(0, 3).map((item, index) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div className="text-sm">
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-gray-500">Qté: {item.quantity}</div>
                          </div>
                        </div>
                      ))}
                      {purchase.items.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{purchase.items.length - 3} autres
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedPurchase(purchase)}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Voir détails</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Purchase Details Modal */}
      {selectedPurchase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Détails de la commande #{selectedPurchase.orderNumber}
                </h2>
                <button
                  onClick={() => setSelectedPurchase(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Status and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(selectedPurchase.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedPurchase.status)}`}>
                      {getStatusText(selectedPurchase.status)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(selectedPurchase.date).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>

                {/* Items */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles commandés</h3>
                  <div className="space-y-4">
                    {selectedPurchase.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                          <div className="text-sm text-gray-600">
                            {formatPrice(item.price)} chacun
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(selectedPurchase.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPurchases;