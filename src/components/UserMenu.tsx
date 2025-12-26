import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

interface UserMenuProps {
  cartItemsCount: number;
  onCartClick: () => void;
  userName: string | null;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export default function UserMenu({ cartItemsCount, onCartClick, userName, isAuthenticated, onLogout }: UserMenuProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

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
    onLogout();
    setIsUserMenuOpen(false);
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
        className="relative p-2 transition-all duration-300 hover:scale-110 rounded-lg text-white hover:text-blue-200 hover:bg-white/10"
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full animate-pulse">
            {cartItemsCount}
          </span>
        )}
      </button>

      {isAuthenticated ? (
        <button
          onClick={toggleUserMenu}
          className="relative p-2 transition-all duration-300 hover:scale-110 rounded-lg text-white hover:text-blue-200 hover:bg-white/10"
        >
          <User className="h-6 w-6" />
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              console.log('Bouton Connexion cliqué');
              handleNavigate('/login');
            }}
            className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors duration-200 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/40"
          >
            Connexion
          </button>
          <button
            onClick={() => {
              console.log('Bouton Inscription cliqué');
              handleNavigate('/register');
            }}
            className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Inscription
          </button>
        </div>
      )}

      {isUserMenuOpen && isAuthenticated && (
        <div ref={menuRef} className="absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl py-2 border transition-all duration-300 bg-white/95 backdrop-blur-md border-white/20">
          <div className="px-4 py-3 border-b border-white/20 text-gray-800">
            <span className="font-medium">{userName || 'Utilisateur'}</span>
          </div>
          <button
            onClick={() => handleNavigate('/dashboard')}
            className="block w-full text-left px-4 py-3 transition-colors duration-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Mon compte
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-3 transition-colors duration-200 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  );
}