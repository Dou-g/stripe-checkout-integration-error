import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import NewArrivalsSection from '../components/NewArrivalsSection';
import PromotionsSection from '../components/PromotionsSection';
import LikedProductsSection from '../components/LikedProductsSection';
import { Product, Category } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export default function HomePage({ onAddToCart, selectedCategory, onSelectCategory }: HomePageProps) {
  // SEO: Update document title and meta description
  React.useEffect(() => {
    document.title = "BG Fashion - Mode Africaine Authentique | Accueil";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez BG Fashion, votre destination mode pour des vêtements et accessoires africains authentiques. Collections tendance, qualité premium, livraison rapide à Dakar.');
    }
  }, []);

  return (
    <main id='home-section' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
      {/* SEO: Hero Section with H1 */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Mode Africaine <span className="text-indigo-600">Authentique</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Découvrez notre collection exclusive de vêtements et accessoires africains.
          Qualité premium, designs uniques, livraison rapide à Dakar et partout au Sénégal.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">✨ Qualité Premium</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">🚚 Livraison Rapide</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🎨 Designs Uniques</span>
        </div>
      </section>

      <div id="categories" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Catégories de Mode</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Explorez notre sélection de vêtements et accessoires africains soigneusement choisis pour exprimer votre style unique.
          </p>
          <CategoryGrid
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>

      <NewArrivalsSection onAddToCart={onAddToCart} />
      <PromotionsSection onAddToCart={onAddToCart} />
      <LikedProductsSection onAddToCart={onAddToCart} />

      {/* SEO: Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BG Fashion",
          "description": "Mode africaine authentique - Vêtements et accessoires de qualité premium",
          "url": "https://bgfashion.sn",
          "logo": "/src/images/logo.png",
          "sameAs": [
            "https://www.facebook.com/bgfashion",
            "https://www.instagram.com/bgfashion",
            "https://www.twitter.com/bgfashion"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+221-33-123-45-67",
            "contactType": "customer service",
            "availableLanguage": "French"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue 28 Bis, 1583",
            "addressLocality": "Dakar",
            "addressCountry": "SN"
          }
        })}
      </script>
    </main>
  );
}