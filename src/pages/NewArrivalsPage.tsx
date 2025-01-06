import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface NewArrivalsPageProps {
  onAddToCart: (product: Product) => void;
}

export default function NewArrivalsPage({ onAddToCart }: NewArrivalsPageProps) {
  // Simuler les nouveaux produits (3 derniers ajoutés)
  const newProducts = products.slice(-3);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Nouveautés</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newProducts.map(product => (
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