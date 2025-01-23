import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Product, Category } from '../types';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export default function ShopPage({ onAddToCart, selectedCategory, onSelectCategory }: ShopPageProps) {
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
      <main id='shop-section' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <h1 className="text-3xl text-center font-bold text-gray-900 mb-8">Trouvez Votre Style
          <br/>
          <span className="text-sm text-gray-700">Laissez votre personnalité s'exprimer à travers nos sélections.</span>
        </h1>
        
        <div className="relative bg-cover bg-center h-64 mb-8" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Célébrez le style avec nous !</h2>
            <p className="text-lg mb-4">Profitez de -20% sur votre première commande</p>
          </div>
        </div>
  
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        {/* Rest of your ShopPage content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}