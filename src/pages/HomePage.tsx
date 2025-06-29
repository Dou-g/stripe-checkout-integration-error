import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import NewArrivalsSection from '../components/NewArrivalsSection';
import PromotionsSection from '../components/PromotionsSection';
import LikedProductsSection from '../components/LikedProductsSection';
import { Product, Category } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export default function HomePage({ onAddToCart, selectedCategory, onSelectCategory }: HomePageProps) {
  return (
    <main id='home-section' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
      <div id="categories" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Catégories</h2>
          <CategoryGrid 
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>
      <NewArrivalsSection onAddToCart={onAddToCart} />
      <PromotionsSection onAddToCart={onAddToCart} />
      <LikedProductsSection onAddToCart={onAddToCart} />
    </main>
  );
}