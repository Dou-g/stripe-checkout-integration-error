// import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string, sectionId?: string) => {
    onNavigate(page, sectionId);
  };

  return (
    <div className="mt-16">
      {/* Newsletter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl shadow-2xl p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Restez dans la boucle
              </h2>
              <p className="text-blue-100 text-lg">
                Recevez nos dernières tendances, offres exclusives et conseils style directement dans votre boîte mail
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* À propos */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BG</span>
                </div>
                <h3 className="text-xl font-bold">BG Fashion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Votre destination ultime pour la mode tendance. Découvrez des pièces uniques qui expriment votre style personnel.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Liens rapides */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleNavigate('home', 'home-section')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate('shop', 'shop-section')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Boutique
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate('home', 'new-arrivals')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Nouveautés
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate('home', 'promotions')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Promotions
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-300">
                  <Truck className="h-5 w-5 text-blue-400" />
                  <span>Livraison gratuite</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span>Paiement sécurisé</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CreditCard className="h-5 w-5 text-purple-400" />
                  <span>Retours faciles</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:info@bg.sn" className="hover:text-white transition-colors duration-300">
                    info@bg.sn
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span>+221 33 123 45 67</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>Dakar, Sénégal</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors duration-300">
                  À propos
                </button>
                <button onClick={() => handleNavigate('contact')} className="hover:text-white transition-colors duration-300">
                  Contact
                </button>
                <button onClick={() => handleNavigate('privacy')} className="hover:text-white transition-colors duration-300">
                  Politique de confidentialité
                </button>
                <button onClick={() => handleNavigate('terms')} className="hover:text-white transition-colors duration-300">
                  Conditions générales
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 BG Fashion. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}