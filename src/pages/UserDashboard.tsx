import React, { useState } from 'react';
import MyPurchases from '../components/MyPurchases';
import Profile from '../components/Profile';
import OrderHistory from '../components/OrderHistory';

const UserDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('myPurchases');

  const renderSection = () => {
    switch (activeSection) {
      case 'myPurchases':
        return <MyPurchases />;
      case 'profile':
        return <Profile />;
      case 'orderHistory':
        return <OrderHistory />;
      default:
        return <MyPurchases />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-1/4 bg-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Tableau de bord</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveSection('myPurchases')}
              className={`w-full text-left py-2 px-4 rounded-lg ${activeSection === 'myPurchases' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
            >
              Mes achats
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full text-left py-2 px-4 rounded-lg ${activeSection === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
            >
              Profil
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('orderHistory')}
              className={`w-full text-left py-2 px-4 rounded-lg ${activeSection === 'orderHistory' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
            >
              Historique des commandes
            </button>
          </li>
          {/* Ajoutez d'autres éléments ici */}
        </ul>
      </div>
      <div className="w-3/4 p-8">
        {renderSection()}
      </div>
    </div>
  );
};

export default UserDashboard;