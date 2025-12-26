import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Product, Category } from '../types';
import { Sparkles, Percent, Zap, Star } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export default function ShopPage({ onAddToCart, selectedCategory, onSelectCategory }: ShopPageProps) {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [showPromo, setShowPromo] = useState(true);
  const { isAuthenticated, userName } = useAuth();

  // Simuler des promotions sur certains produits
  const promotionalProducts = products.map(product => ({
    ...product,
    isOnSale: Math.random() > 0.7, // 30% des produits en promo
    discount: Math.floor(Math.random() * 30) + 10 // Réduction de 10-40%
  }));

  const filteredProducts = selectedCategory
    ? promotionalProducts.filter(product => product.category === selectedCategory)
    : promotionalProducts;

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const handleSeeMore = () => {
    setVisibleProducts(prev => prev + 12);
  };

  // SEO: Update document title and meta description
  React.useEffect(() => {
    const categoryText = selectedCategory ? ` - ${selectedCategory}` : '';
    document.title = `Boutique${categoryText} | BG Fashion - Mode Africaine`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Découvrez notre collection de mode africaine${categoryText.toLowerCase()}. Vêtements et accessoires authentiques, qualité premium, livraison rapide à Dakar.`);
    }
  }, [selectedCategory]);

  // Animation du bandeau promo
  useEffect(() => {
    const timer = setTimeout(() => setShowPromo(false), 10000); // Disparaît après 10s
    return () => clearTimeout(timer);
  }, []);

  return (
      <main id='shop-section' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* SEO: Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Boutique {selectedCategory && `- ${selectedCategory}`}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de mode africaine authentique.
            {selectedCategory && ` Explorez nos ${selectedCategory.toLowerCase()} tendance.`}
          </p>
          {isAuthenticated && userName && (
            <p className="text-lg text-blue-600 mt-4 font-medium">
              Bienvenue de retour, {userName} ! Découvrez nos dernières nouveautés.
            </p>
          )}
        </header>
        {/* Bandeau Promotionnel Animé */}
        {showPromo && (
          <div className="fixed top-20 left-4 right-4 z-40 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white p-4 rounded-2xl shadow-2xl animate-bounce border-2 border-white/20">
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="h-6 w-6 animate-spin" />
              <span className="font-bold text-lg">🎉 PROMOTIONS FLASH - JUSQU'À -40% !</span>
              <Sparkles className="h-6 w-6 animate-spin" />
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute top-2 right-2 text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        <h1 className="text-3xl text-center font-bold text-gray-900 mb-8">Trouvez Votre Style
          <br/>
          <span className="text-sm text-gray-700">Laissez votre personnalité s'exprimer à travers nos sélections.</span>
        </h1>
        
        {/* Section Offres Spéciales */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8 text-yellow-500 mr-3 animate-pulse" />
              Offres Spéciales
              <Zap className="h-8 w-8 text-yellow-500 ml-3 animate-pulse" />
            </h2>
            <p className="text-gray-600">Ne manquez pas ces occasions exceptionnelles !</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-200">
              <div className="text-center">
                <Percent className="h-12 w-12 text-red-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">-30% sur les Chaussures</h3>
                <p className="text-gray-600 mb-4">Collection été limitée</p>
                <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse">
                  OFFRE LIMITÉE
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200">
              <div className="text-center">
                <Star className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-spin" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">2ème Article -50%</h3>
                <p className="text-gray-600 mb-4">Sur tous les parfums</p>
                <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse">
                  ÉCONOMISEZ
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200">
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-green-500 mx-auto mb-4 animate-ping" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison Gratuite</h3>
                <p className="text-gray-600 mb-4">À partir de 50€ d'achat</p>
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse">
                  GRATUIT
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative bg-cover bg-center h-64 mb-8 rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-3xl" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-3xl font-bold mb-4 animate-pulse">Célébrez le style avec nous !</h2>
            <p className="text-lg mb-4">Profitez de -20% sur votre première commande</p>
            <div className="flex space-x-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">HOT</span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce" style={{ animationDelay: '0.5s' }}>NEW</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce" style={{ animationDelay: '1s' }}>SALE</span>
            </div>
          </div>
        </div>
  
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        {/* Grille de produits avec animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {product.isOnSale && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                      -{product.discount}%
                    </div>
                  </div>
                )}
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            </div>
          ))}
        </div>
      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Voir plus
          </button>
        </div>
      )}
    </main>
  );
}