import React, { useRef } from 'react';
import { Category } from '../types';
import { categories } from '../data/categories';
import { categoryImages } from '../data/categoryImages';
import { products } from '../data/products';
import ProductCard from './ProductCard';

interface CategoryGridProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
  onAddToCart: (product: any) => void;
}

export default function CategoryGrid({ selectedCategory, onSelectCategory, onAddToCart }: CategoryGridProps) {
  const categoryRefs = useRef<Record<Category, HTMLDivElement | null>>({} as Record<Category, HTMLDivElement | null>);

  const scrollToCategory = (category: Category) => {
    const ref = categoryRefs.current[category];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onSelectCategory(category);
  };

  return (
    <div>
      {/* Grille des catégories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => scrollToCategory(category)}
            className="relative group overflow-hidden rounded-lg aspect-square"
          >
            <img
              src={categoryImages[category]}
              alt={category}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
              <span className="text-white text-xl font-semibold">{category}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Liste des produits par catégorie */}
      <div className="space-y-16">
        {categories.map((category) => (
          <div
            key={category}
            ref={(el) => categoryRefs.current[category] = el}
            className="scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter(product => product.category === category)
                .map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}