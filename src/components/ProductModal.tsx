import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const formatPrice = (price: number) => {
  return `${(price * 100).toLocaleString()}`;
}

;export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  // Désactiver le défilement du body quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full my-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[100vh]">
          <div className="h-72 md:h-[500px]">
            <img
              src={product.image}
              alt={`${product.name} - Mode africaine BG Fashion, ${product.description}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-3xl font-bold text-gray-900 mb-6">
              {formatPrice(product.price)}
            </p>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}