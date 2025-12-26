import React, { useState } from 'react';
import { Product } from '../types';
import { Plus, Heart, Share2 } from 'lucide-react';
import ProductModal from './ProductModal';
import { useLikedProducts } from '../context/LikedProductsContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { likedProducts, toggleLike } = useLikedProducts();
  const isLiked = likedProducts.some((p) => p.id === product.id);

  const formatPrice = (price: number) => {
    return `${(price * 100).toLocaleString()}`;
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col h-full">
        <div className="relative">
          <div 
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          >
            <img
              src={product.image}
              alt={`${product.name} - Mode africaine authentique, ${product.description}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button
              onClick={() => toggleLike(product)}
              className={`p-2 rounded-full ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
              } shadow-md hover:scale-110 transition-all`}
            >
              <Heart className="h-4 w-4" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={() => {
                navigator.share({
                  title: product.name,
                  text: product.description,
                  url: window.location.href,
                });
              }}
              className="p-2 rounded-full bg-white text-gray-600 shadow-md hover:scale-110 transition-all"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="mt-1 text-gray-600 text-sm flex-grow">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-1" />
              Ajouter
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={onAddToCart}
        />
      )}

      {/* SEO: Structured Data for Product */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image,
          "category": product.category,
          "brand": {
            "@type": "Brand",
            "name": "BG Fashion"
          },
          "offers": {
            "@type": "Offer",
            "price": (product.price * 100).toString(),
            "priceCurrency": "XOF",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "BG Fashion"
            }
          }
        })}
      </script>
    </>
  );
}