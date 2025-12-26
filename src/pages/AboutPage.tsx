// import React from 'react';
import { Users, Heart, Truck, Shield, Star, Award, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/15 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div id='our-story' className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              Depuis 2024
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Notre <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Histoire</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
              BG redéfinit l'élégance africaine en proposant des pièces uniques qui allient tradition ancestrale et modernité contemporaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Découvrir notre collection
              </button>
              <button className="px-8 py-4 border-2 border-white/50 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Notre vision
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Créer un pont entre les traditions culturelles riches de l'Afrique et les tendances modernes de la mode internationale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact Global</h3>
                  <p className="text-gray-600">Nous connectons les artisans locaux aux marchés internationaux, créant des opportunités économiques durables.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Durabilité</h3>
                  <p className="text-gray-600">Chaque pièce est conçue avec des matériaux éco-responsables et des pratiques respectueuses de l'environnement.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">Nous fusionnons les techniques artisanales traditionnelles avec les technologies modernes les plus avancées.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Prix d'Excellence</h3>
                  <p className="text-gray-600">Reconnus pour notre contribution à la préservation des arts traditionnels africains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div id='our-values' className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos décisions et créations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Communauté",
                description: "Nous créons plus qu'une marque, une communauté unie par le style",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Chaque pièce est sélectionnée avec passion et attention aux détails",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Truck,
                title: "Service",
                description: "Livraison rapide et service client exceptionnel 24/7",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Qualité",
                description: "Des produits premium pour une satisfaction garantie",
                gradient: "from-purple-500 to-indigo-500"
              }
            ].map((value, index) => (
              <div key={index} className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Chiffres Clés
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Notre impact en quelques chiffres impressionnants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10K+", label: "Clients Satisfaits", icon: Users },
              { number: "1K+", label: "Produits Uniques", icon: Star },
              { number: "24/7", label: "Support Client", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <stat.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <p className="text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</p>
                  <p className="text-blue-100 text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id='our-team' className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les talents passionnés qui donnent vie à notre vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Directrice Créative",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500",
                specialty: "Design & Innovation"
              },
              {
                name: "David Chen",
                role: "Directeur Commercial",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500",
                specialty: "Stratégie & Développement"
              },
              {
                name: "Emma Williams",
                role: "Responsable Design",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500",
                specialty: "Créativité & Tendances"
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez notre collection unique et laissez-vous séduire par l'élégance africaine moderne.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Explorer la boutique
          </button>
        </div>
      </div>
    </main>
  );
}