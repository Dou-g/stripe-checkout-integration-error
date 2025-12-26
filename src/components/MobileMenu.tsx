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
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-80 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 shadow-2xl p-6 border-r border-white/20">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">BG</span>
            </div>
            <span className="text-xl font-bold text-white">Fashion</span>
          </div>
          <button onClick={onClose} className="p-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-colors duration-200">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                currentPage === link.id
                  ? 'bg-white/20 text-white shadow-md'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="font-medium">{link.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}