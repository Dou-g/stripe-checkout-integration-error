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
          className={`relative font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 text-white/90 hover:text-white ${
            currentPage === link.id ? 'text-white' : ''
          } ${currentPage === link.id ? 'after:w-full' : 'hover:after:w-full'} after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}