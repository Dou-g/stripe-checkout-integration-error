import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { isLoggedIn, getUserName, logoutUser } from '../services/authService';

interface UserMenuProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
}

export default function UserMenu({ cartItemsCount, onCartClick }: UserMenuProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoggedIn()) {
      setUserName(getUserName());
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUserName(null);
    setIsUserMenuOpen(false); // Fermer le menu utilisateur
    navigate('/login');
    window.location.reload(); // Recharger la page pour mettre à jour l'état de connexion
  };

  const handleNavigate = (path: string) => {
    setIsUserMenuOpen(false); // Fermer le menu utilisateur
    navigate(path);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="relative flex items-center space-x-4">
      <button
        onClick={onCartClick}
        className="relative p-2 text-white hover:text-gray-200 transition-colors"
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cartItemsCount}
          </span>
        )}
      </button>
      <button
        onClick={toggleUserMenu}
        className="relative p-2 text-white hover:text-gray-200 transition-colors"
      >
        <User className="h-6 w-6" />
      </button>
      {isUserMenuOpen && (
        <div ref={menuRef} className="absolute right-0 mt-12 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {userName ? (
            <>
              <span className="block px-4 py-2 text-sm text-gray-700">{userName}</span>
              <button
                onClick={() => handleNavigate('/dashboard')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Mon compte
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleNavigate('/login')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Se connecter
              </button>
              <button
                onClick={() => handleNavigate('/register')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                S'inscrire
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}