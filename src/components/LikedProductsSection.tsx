import React from 'react';
import { useLikedProducts } from '../context/LikedProductsContext';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface LikedProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const LikedProductsSection: React.FC<LikedProductsSectionProps> = ({ onAddToCart }) => {
  const { likedProducts } = useLikedProducts();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Produits Aimés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedProductsSection;