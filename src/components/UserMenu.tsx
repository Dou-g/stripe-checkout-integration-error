import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

interface UserMenuProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
}

export default function UserMenu({ cartItemsCount, onCartClick, onLoginClick }: UserMenuProps) {
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
      
      <button
        onClick={onLoginClick}
        className="p-2 text-white hover:text-gray-200 transition-colors"
      >
        <User className="h-6 w-6" />
      </button>
    </div>
  );
}