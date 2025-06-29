import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types';

interface LikedProductsContextProps {
  likedProducts: Product[];
  toggleLike: (product: Product) => void;
}

const LikedProductsContext = createContext<LikedProductsContextProps | undefined>(undefined);

export const LikedProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  const toggleLike = (product: Product) => {
    setLikedProducts((prevLikedProducts) => {
      if (prevLikedProducts.find((p) => p.id === product.id)) {
        return prevLikedProducts.filter((p) => p.id !== product.id);
      } else {
        return [...prevLikedProducts, product];
      }
    });
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => {
  const context = useContext(LikedProductsContext);
  if (!context) {
    throw new Error('useLikedProducts must be used within a LikedProductsProvider');
  }
  return context;
};