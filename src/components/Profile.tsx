import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';

const Profile: React.FC = () => {
  const { userName, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Charger les données de l'utilisateur depuis le localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const userEmail = localStorage.getItem('userEmail');
      const savedName = localStorage.getItem('userName');
      const savedPhone = localStorage.getItem('userPhone') || '';
      const savedAddress = localStorage.getItem('userAddress') || '';
      const savedDateOfBirth = localStorage.getItem('userDateOfBirth') || '';

      setFormData({
        name: savedName || '',
        email: userEmail || '',
        phone: savedPhone,
        address: savedAddress,
        dateOfBirth: savedDateOfBirth
      });
    }
  }, [isAuthenticated]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Sauvegarder dans le localStorage
      localStorage.setItem('userName', formData.name);
      localStorage.setItem('userPhone', formData.phone);
      localStorage.setItem('userAddress', formData.address);
      localStorage.setItem('userDateOfBirth', formData.dateOfBirth);

      // Mettre à jour le nom dans le hook auth si nécessaire
      if (formData.name !== userName) {
        window.dispatchEvent(new Event('authChange'));
      }

      setIsEditing(false);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Recharger les données originales
    const userEmail = localStorage.getItem('userEmail');
    const savedName = localStorage.getItem('userName');
    const savedPhone = localStorage.getItem('userPhone') || '';
    const savedAddress = localStorage.getItem('userAddress') || '';
    const savedDateOfBirth = localStorage.getItem('userDateOfBirth') || '';

    setFormData({
      name: savedName || '',
      email: userEmail || '',
      phone: savedPhone,
      address: savedAddress,
      dateOfBirth: savedDateOfBirth
    });
    setIsEditing(false);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{formData.name || 'Utilisateur'}</h1>
                <p className="text-blue-100">Membre BG Fashion</p>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Edit2 className="h-4 w-4" />
                <span>Modifier</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-200 disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  <span>{isLoading ? 'Sauvegarde...' : 'Sauvegarder'}</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                  <span>Annuler</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informations personnelles */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations personnelles</h2>

              {/* Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Nom complet
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Votre nom complet"
                  />
                ) : (
                  <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{formData.name || 'Non spécifié'}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Adresse email
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{formData.email}</p>
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Téléphone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Votre numéro de téléphone"
                  />
                ) : (
                  <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{formData.phone || 'Non spécifié'}</p>
                )}
              </div>
            </div>

            {/* Adresse et autres informations */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Adresse et informations</h2>

              {/* Adresse */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Adresse
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Votre adresse complète"
                  />
                ) : (
                  <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{formData.address || 'Non spécifiée'}</p>
                )}
              </div>

              {/* Date de naissance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Date de naissance
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                    {formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('fr-FR') : 'Non spécifiée'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Statistiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">Commandes passées</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Articles achetés</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">0 FCFA</div>
                <div className="text-sm text-gray-600">Total dépensé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;