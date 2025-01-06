import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface NewArrivalsSectionProps {
  onAddToCart: (product: Product) => void;
}

export default function NewArrivalsSection({ onAddToCart }: NewArrivalsSectionProps) {
  const newProducts = products.slice(-3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nouveautés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}