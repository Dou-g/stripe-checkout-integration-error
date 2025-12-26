import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Truck, MapPin, Phone, Clock, CheckCircle, Package, AlertCircle } from 'lucide-react';

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | 'cancelled';
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  total: number;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    phone: string;
  };
  trackingNumber?: string;
  estimatedDelivery?: string;
  timeline: Array<{
    date: string;
    status: string;
    description: string;
    completed: boolean;
  }>;
}

const OrderHistory: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
    }
  }, [isAuthenticated]);

  const loadOrders = () => {
    const savedOrders = localStorage.getItem('userOrders');
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders);
        setOrders(parsedOrders);
      } catch (error) {
        console.error('Erreur lors du chargement des commandes:', error);
        setOrders([]);
      }
    } else {
      // Données d'exemple pour la démonstration
      const exampleOrders: Order[] = [
        {
          id: '1',
          orderNumber: 'BG-2024-001',
          date: '2024-01-15',
          status: 'delivered',
          items: [
            {
              id: '1',
              name: 'Robe élégante rouge',
              price: 45000,
              quantity: 1,
              image: '/api/placeholder/100/100'
            }
          ],
          total: 45000,
          shippingAddress: {
            name: 'John Doe',
            address: '123 Rue de la Mode',
            city: 'Douala',
            phone: '+237 6XX XXX XXX'
          },
          trackingNumber: 'BG-TRK-001',
          estimatedDelivery: '2024-01-18',
          timeline: [
            { date: '2024-01-15 10:00', status: 'confirmed', description: 'Commande confirmée', completed: true },
            { date: '2024-01-15 14:00', status: 'processing', description: 'Commande en préparation', completed: true },
            { date: '2024-01-16 09:00', status: 'shipped', description: 'Commande expédiée', completed: true },
            { date: '2024-01-18 15:00', status: 'delivered', description: 'Commande livrée', completed: true }
          ]
        },
        {
          id: '2',
          orderNumber: 'BG-2024-002',
          date: '2024-01-20',
          status: 'shipped',
          items: [
            {
              id: '2',
              name: 'Sac à main noir',
              price: 25000,
              quantity: 1,
              image: '/api/placeholder/100/100'
            },
            {
              id: '3',
              name: 'Chemise blanche',
              price: 15000,
              quantity: 1,
              image: '/api/placeholder/100/100'
            }
          ],
          total: 40000,
          shippingAddress: {
            name: 'John Doe',
            address: '123 Rue de la Mode',
            city: 'Douala',
            phone: '+237 6XX XXX XXX'
          },
          trackingNumber: 'BG-TRK-002',
          estimatedDelivery: '2024-01-25',
          timeline: [
            { date: '2024-01-20 11:00', status: 'confirmed', description: 'Commande confirmée', completed: true },
            { date: '2024-01-20 16:00', status: 'processing', description: 'Commande en préparation', completed: true },
            { date: '2024-01-22 10:00', status: 'shipped', description: 'Commande expédiée', completed: true },
            { date: '2024-01-25 14:00', status: 'out_for_delivery', description: 'En cours de livraison', completed: false }
          ]
        },
        {
          id: '3',
          orderNumber: 'BG-2024-003',
          date: '2024-01-22',
          status: 'processing',
          items: [
            {
              id: '4',
              name: 'Jean slim',
              price: 20000,
              quantity: 2,
              image: '/api/placeholder/100/100'
            }
          ],
          total: 40000,
          shippingAddress: {
            name: 'John Doe',
            address: '123 Rue de la Mode',
            city: 'Douala',
            phone: '+237 6XX XXX XXX'
          },
          timeline: [
            { date: '2024-01-22 09:00', status: 'confirmed', description: 'Commande confirmée', completed: true },
            { date: '2024-01-22 13:00', status: 'processing', description: 'Commande en préparation', completed: true },
            { date: '2024-01-24 00:00', status: 'shipped', description: 'Commande expédiée', completed: false }
          ]
        }
      ];
      setOrders(exampleOrders);
      localStorage.setItem('userOrders', JSON.stringify(exampleOrders));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-orange-500" />;
      case 'out_for_delivery':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'En attente';
      case 'confirmed':
        return 'Confirmée';
      case 'processing':
        return 'En préparation';
      case 'shipped':
        return 'Expédiée';
      case 'out_for_delivery':
        return 'En livraison';
      case 'delivered':
        return 'Livrée';
      case 'cancelled':
        return 'Annulée';
      default:
        return 'Statut inconnu';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-orange-100 text-orange-800';
      case 'out_for_delivery':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.status === filter;
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
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Truck className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Suivi des commandes</h1>
              <p className="text-purple-100">Suivez l'état de vos commandes en temps réel</p>
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
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes ({orders.length})
            </button>
            <button
              onClick={() => setFilter('processing')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'processing'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              En cours ({orders.filter(o => ['confirmed', 'processing'].includes(o.status)).length})
            </button>
            <button
              onClick={() => setFilter('shipped')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'shipped'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Expédiées ({orders.filter(o => ['shipped', 'out_for_delivery'].includes(o.status)).length})
            </button>
            <button
              onClick={() => setFilter('delivered')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'delivered'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Livrées ({orders.filter(o => o.status === 'delivered').length})
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="p-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <Truck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune commande trouvée</h3>
              <p className="text-gray-500">
                {filter === 'all'
                  ? "Vous n'avez pas encore passé de commande."
                  : `Aucune commande avec le statut "${getStatusText(filter)}".`
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Commande #{order.orderNumber}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {formatPrice(order.total)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(order.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {order.items.slice(0, 2).map((item, index) => (
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
                      {order.items.length > 2 && (
                        <div className="text-sm text-gray-500">
                          +{order.items.length - 2} autres
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      {order.trackingNumber && (
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Suivi:</span> {order.trackingNumber}
                        </div>
                      )}
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        Suivre
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Order Tracking Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Suivi de la commande #{selectedOrder.orderNumber}
                </h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <AlertCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Timeline */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Chronologie</h3>
                  <div className="space-y-4">
                    {selectedOrder.timeline.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          event.completed ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`font-medium ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                              {event.description}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {new Date(event.date).toLocaleDateString('fr-FR', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Info */}
                  {selectedOrder.estimatedDelivery && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Truck className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-blue-900">Livraison estimée</span>
                      </div>
                      <p className="text-blue-800">
                        {new Date(selectedOrder.estimatedDelivery).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </div>

                {/* Order Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Détails de la commande</h3>

                  {/* Items */}
                  <div className="space-y-3 mb-6">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Adresse de livraison
                    </h4>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-900">{selectedOrder.shippingAddress.name}</p>
                      <p className="text-gray-600">{selectedOrder.shippingAddress.address}</p>
                      <p className="text-gray-600">{selectedOrder.shippingAddress.city}</p>
                      <p className="text-gray-600 flex items-center mt-1">
                        <Phone className="h-4 w-4 mr-1" />
                        {selectedOrder.shippingAddress.phone}
                      </p>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(selectedOrder.total)}
                      </span>
                    </div>
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

export default OrderHistory;