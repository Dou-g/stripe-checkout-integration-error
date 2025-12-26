import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, User, LogIn, UserCircle } from 'lucide-react';

interface UserMenuProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
  onAccountClick: () => void;
}

export default function UserMenu({ cartItemsCount, onCartClick, onLoginClick, onAccountClick }: UserMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAccountClick = () => {
    setIsDropdownOpen(false);
    onAccountClick();
  };

  const handleLoginClick = () => {
    setIsDropdownOpen(false);
    onLoginClick();
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onCartClick}
        className="relative p-2 text-white hover:text-gray-200 transition-colors"
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
            {cartItemsCount}
          </span>
        )}
      </button>
      
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-2 text-white hover:text-gray-200 transition-colors"
        >
          <User className="h-6 w-6" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <button
              onClick={handleAccountClick}
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
            >
              <UserCircle className="h-4 w-4" />
              <span>Mon Compte</span>
            </button>
            <button
              onClick={handleLoginClick}
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Se connecter</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}