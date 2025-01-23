import { Product } from '../types';

// Fonction pour convertir les prix en FCFA (1 EUR ≈ 655.957 FCFA)
// const  = (euroPrice: number) => Math.round(euroPrice * 655.957);

export const products: Product[] = [
  // Accessoires
  {
    id: 1,
    name: "Montre Classic",
    price: 250,
    description: "Montre élégante en acier inoxydable avec cadran minimaliste",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800",
    category: "Accessoires"
  },
  {
    id: 2,
    name: "Ceinture Cuir",
    price: 50,
    description: "Ceinture en cuir véritable avec boucle classique",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800",
    category: "Accessoires"
  },
  {
    id: 3,
    name: "Lunettes de Soleil Aviator",
    price: 150,
    description: "Lunettes de soleil style aviateur avec verres polarisés",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800",
    category: "Accessoires"
  },

  // Vêtements
  {
    id: 4,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 5,
    name: "Robe d'Été",
    price: 75,
    description: "Robe légère en coton avec motif fleuri",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 6,
    name: "Blazer Élégant",
    price: 125,
    description: "Blazer structuré en laine mélangée",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },

  // Parfums
  {
    id: 7,
    name: "Parfum Élégance",
    price: 500,
    description: "Parfum raffiné aux notes boisées et florales",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800",
    category: "Parfums"
  },
  {
    id: 8,
    name: "Parfum Mystique",
    price: 750,
    description: "Parfum envoûtant aux notes orientales",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800",
    category: "Parfums"
  },
  {
    id: 9,
    name: "Parfum Ocean",
    price: 250,
    description: "Parfum frais aux notes marines et agrumes",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800",
    category: "Parfums"
  },

  // Chaussures
  {
    id: 10,
    name: "Sneakers Urban",
    price: 150,
    description: "Sneakers confortables au design moderne",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800",
    category: "Chaussures"
  },
  {
    id: 11,
    name: "Boots Cuir",
    price: 250,
    description: "Boots en cuir véritable, style intemporel",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800",
    category: "Chaussures"
  },
  {
    id: 12,
    name: "Escarpins Classiques",
    price: 100,
    description: "Escarpins en cuir avec talon de 8cm",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800",
    category: "Chaussures"
  },

  // Sacs
  {
    id: 13,
    name: "Sac en Cuir",
    price: 150,
    description: "Sac à main en cuir véritable fait main",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800",
    category: "Sacs"
  },
  {
    id: 14,
    name: "Sac à Dos Urban",
    price: 100,
    description: "Sac à dos moderne et fonctionnel",
    image: "https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sacs"
  },
  {
    id: 15,
    name: "Pochette Soirée",
    price: 150,
    description: "Pochette élégante pour vos soirées",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800",
    category: "Sacs"
  }
];