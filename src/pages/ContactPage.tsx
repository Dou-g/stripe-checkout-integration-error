import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Instagram, Facebook, Twitter, Heart, Sparkles, Star, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 animate-bounce">
          <Sparkles className="h-8 w-8 text-yellow-300" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Heart className="h-6 w-6 text-pink-300" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-spin" style={{ animationDuration: '3s' }}>
          <Star className="h-5 w-5 text-yellow-300" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contactez BG Fashion
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Votre style, notre passion. Parlons mode ensemble !
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">✨ Style Personnalisé</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">💬 Support 24/7</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">🌟 Conseils Experts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-100">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Appelez-nous</h3>
              <p className="text-gray-600 mb-4">Notre équipe de style est disponible pour vous conseiller</p>
              <a href="tel:+221331234567" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors">
                +221 33 123 45 67
              </a>
              <p className="text-sm text-gray-500 mt-2">Lun-Sam: 9h-19h | Dim: 10h-17h</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Écrivez-nous</h3>
              <p className="text-gray-600 mb-4">Pour toutes vos questions sur nos collections</p>
              <a href="mailto:style@bgfashion.com" className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
                style@bgfashion.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visitez-nous</h3>
              <p className="text-gray-600 mb-4">Découvrez nos collections en boutique</p>
              <address className="text-lg font-bold text-blue-600 not-italic">
                Rue 28 Bis, 1583<br />
                Dakar, Sénégal
              </address>
              <p className="text-sm text-gray-500 mt-2">Parking gratuit disponible</p>
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gradient-to-r from-pink-200 to-purple-200">
            <div className="flex items-center mb-8">
              <MessageCircle className="h-8 w-8 text-pink-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Envoyez-nous un message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="commande">Suivi de commande</option>
                  <option value="retour">Retour / Échange</option>
                  <option value="conseil">Conseil style</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200 resize-none"
                  placeholder="Décrivez votre demande ou votre question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="h-6 w-6 mr-3" />
                Envoyer mon message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Horaires */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Lundi - Vendredi</span>
                  <span className="text-blue-600 font-bold">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Samedi</span>
                  <span className="text-blue-600 font-bold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Dimanche</span>
                  <span className="text-pink-600 font-bold">Fermé</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                ✨ Ouvert le dimanche sur rendez-vous pour événements spéciaux
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
              <p className="text-gray-600 mb-6">
                Découvrez nos dernières tendances et inspirations sur les réseaux sociaux
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-full text-white hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-full text-white hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-600">50K+</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}