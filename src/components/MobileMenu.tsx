import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function MobileMenu({ isOpen, onClose, onNavigate, currentPage }: MobileMenuProps) {
  if (!isOpen) return null;

  const links = [
    { id: 'home', label: 'Accueil' },
    { id: 'shop', label: 'Ma Boutique' },
    { id: 'about', label: 'A Propos' },
    { id: 'contact', label: 'Contact' },
    { id: 'account', label: 'Mon Compte' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl p-6">
        <div className="flex justify-end mb-6">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                currentPage === link.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}