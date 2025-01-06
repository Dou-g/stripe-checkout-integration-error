import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string, sectionId?: string) => {
    onNavigate(page);
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="mt-16">
      {/* Newsletter Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Restez informé
            </h2>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir en avant-première nos offres exclusives
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Liens rapides */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-blue-600 tracking-wider uppercase">
                Liens rapides
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavigate('home', 'home-section')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('shop', 'shop-section')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Ma Boutique
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('shop', 'new-arrivals')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Nouveautés
                  </button>
                </li>
              </ul>
            </div>

            {/* À propos */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-blue-600 tracking-wider uppercase">
                À propos
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavigate('about', 'our-story')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Notre Histoire
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('about', 'our-values')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Nos Valeurs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('about', 'our-commitments')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Nos Engagements
                  </button>
                </li>
              </ul>
            </div>

            {/* Contactez-nous */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-blue-600 tracking-wider uppercase">
                Contactez-nous
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@bg.sn"
                    onClick={() => handleNavigate('contact', 'customer-service')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    info@bg.sn
                  </a>
                </li>
                <li>
                  <p>
                    +221 33 123 45 67
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Réseaux sociaux et copyright */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                © 2024 BoutiqueFR. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}