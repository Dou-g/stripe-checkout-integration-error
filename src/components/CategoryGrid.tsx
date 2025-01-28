/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import { Category, Product } from '../types';
import { categories } from '../data/categories';
import { categoryImages } from '../data/categoryImages';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import Modal from './CategoryModal';

interface CategoryGridProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
  onAddToCart: (product: Product) => void;
}

export default function CategoryGrid({ selectedCategory, onSelectCategory, onAddToCart }: CategoryGridProps) {
  const categoryRefs = useRef<Record<Category, HTMLDivElement | null>>({} as Record<Category, HTMLDivElement | null>);
  const [expandedCategories, setExpandedCategories] = useState<Record<Category, boolean>>({} as Record<Category, boolean>);
  const [modalCategory, setModalCategory] = useState<Category | null>(null);

  const scrollToCategory = (category: Category) => {
    const ref = categoryRefs.current[category];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onSelectCategory(category);
  };

  const toggleCategory = (category: Category) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const openModal = (category: Category) => {
    setModalCategory(category);
  };

  const closeModal = () => {
    setModalCategory(null);
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
                .slice(0, 3) // Afficher seulement les 3 premiers produits
                .map((product, index) => (
                  <div key={product.id} className="relative">
                    <ProductCard
                      product={product}
                      onAddToCart={onAddToCart}
                    />
                    {index === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <button
                          onClick={() => openModal(category)}
                          className="text-white font-semibold flex items-center"
                        >
                          Voir tous les produits
                          <span className="ml-2">▼</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalCategory && (
        <Modal isOpen={!!modalCategory} onClose={closeModal}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{modalCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(product => product.category === modalCategory)
              .map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
          </div>
        </Modal>
      )}
    </div>
  );
}