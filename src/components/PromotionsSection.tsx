import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface PromotionsSectionProps {
  onAddToCart: (product: Product) => void;
}

export default function PromotionsSection({ onAddToCart }: PromotionsSectionProps) {
  const promotionalProducts = products.slice(0, 3).map(product => ({
    ...product,
    price: Number((product.price * 0.8).toFixed(2))
  }));

  return (
    <section id="promotions" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Promotions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotionalProducts.map(product => (
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