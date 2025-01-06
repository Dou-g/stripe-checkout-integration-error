import React from 'react';

interface DesktopMenuProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function DesktopMenu({ onNavigate, currentPage }: DesktopMenuProps) {
  const links = [
    { id: 'home', label: 'Accueil' },
    { id: 'shop', label: 'Ma Boutique' },
    { id: 'about', label: 'A Propos' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8 ml-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onNavigate(link.id)}
          className={`text-white hover:text-gray-200 transition-colors ${
            currentPage === link.id ? 'font-medium border-b-2 border-white' : ''
          }`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}