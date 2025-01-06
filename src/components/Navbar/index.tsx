import React, { useState, useEffect } from 'react';
import NavbarContent from './NavbarContent';
import NavbarCarousel from './NavbarCarousel';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  showHero: boolean;
}

export default function Navbar({ 
  cartItemsCount, 
  onCartClick, 
  onNavigate, 
  currentPage, 
  showHero 
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showHero && <NavbarCarousel />}
      <NavbarContent
        cartItemsCount={cartItemsCount}
        onCartClick={onCartClick}
        onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
        onNavigate={onNavigate}
        currentPage={currentPage}
        isScrolled={isScrolled}
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
    </>
  );
}