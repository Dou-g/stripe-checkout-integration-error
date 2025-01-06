import React from 'react';
import { Users, Heart, Truck, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Notre Histoire</h1>
          <p className="text-xl max-w-2xl">
            Depuis 2024, BG redéfinit l'élégance camerounaise en proposant des pièces uniques qui allient tradition et modernité.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Communauté",
                description: "Nous créons plus qu'une marque, une communauté unie par le style"
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Chaque pièce est sélectionnée avec passion et attention aux détails"
              },
              {
                icon: Truck,
                title: "Service",
                description: "Livraison rapide et service client exceptionnel"
              },
              {
                icon: Shield,
                title: "Qualité",
                description: "Des produits premium pour une satisfaction garantie"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Clients Satisfaits" },
              { number: "1K+", label: "Produits Uniques" },
              { number: "24/7", label: "Support Client" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Directrice Créative",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500"
              },
              {
                name: "David Chen",
                role: "Directeur Commercial",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500"
              },
              {
                name: "Emma Williams",
                role: "Responsable Design",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}