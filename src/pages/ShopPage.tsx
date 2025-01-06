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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Notre Collection</h1>
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      
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