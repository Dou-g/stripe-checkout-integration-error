import React from 'react';
import { Menu } from 'lucide-react';
import DesktopMenu from './DesktopMenu';
import UserMenu from './UserMenu';

interface NavbarContentProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMobileMenuOpen: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  isScrolled: boolean;
}

export default function NavbarContent({ 
  cartItemsCount, 
  onCartClick, 
  onMobileMenuOpen, 
  onNavigate, 
  currentPage,
  isScrolled 
}: NavbarContentProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <button
              onClick={onMobileMenuOpen}
              className="p-2 text-white lg:hidden hover:text-gray-200"
            >
              <Menu className="h-6 w-6" />
            </button>
            <span 
              onClick={() => onNavigate('home')}
              className="ml-2 text-2xl font-bold cursor-pointer text-white hover:text-gray-200 transition-colors"
            >
              BG
            </span>
            <DesktopMenu onNavigate={onNavigate} currentPage={currentPage} />
          </div>
          
          <UserMenu
            cartItemsCount={cartItemsCount}
            onCartClick={onCartClick}
            onLoginClick={() => console.log('Login clicked')}
          />
        </div>
      </div>
    </div>
  );
}