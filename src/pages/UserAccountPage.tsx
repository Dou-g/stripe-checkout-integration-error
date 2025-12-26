import React from 'react';
import { User, Mail, Phone, MapPin, ShoppingBag, Settings } from 'lucide-react';

interface UserAccountPageProps {
  onNavigate?: (page: string) => void;
}

export default function UserAccountPage({ onNavigate }: UserAccountPageProps) {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: 'Utilisateur',
    email: 'user@example.com',
    phone: '+221 33 123 45 67',
    address: 'Dakar, Sénégal'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-4">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold">Mon Compte</h1>
                <p className="text-blue-100 mt-1">{user.name}</p>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations personnelles</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Téléphone</p>
                    <p className="text-gray-900 font-medium">{user.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Adresse</p>
                    <p className="text-gray-900 font-medium">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Actions rapides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => onNavigate && onNavigate('shop')}
                  className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Mes commandes</p>
                    <p className="text-sm text-gray-600">Voir l'historique des achats</p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Paramètres</p>
                    <p className="text-sm text-gray-600">Gérer votre compte</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Account Actions */}
            <div className="pt-6 border-t border-gray-200">
              <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Modifier mes informations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
