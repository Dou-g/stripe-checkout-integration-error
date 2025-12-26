import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface PromotionsPageProps {
  onAddToCart: (product: Product) => void;
}

export default function PromotionsPage({ onAddToCart }: PromotionsPageProps) {
  // Simuler les produits en promotion (3 premiers produits avec 20% de réduction)
  const promotionalProducts = products.slice(0, 3).map(product => ({
    ...product,
    price: Number((product.price * 0.8).toFixed(2))
  }));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Promotions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotionalProducts.map(product => (
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