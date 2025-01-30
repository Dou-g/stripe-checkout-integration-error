import { Product } from '../types';

// Fonction pour convertir les prix en FCFA (1 EUR ≈ 655.957 FCFA)
// const  = (euroPrice: number) => Math.round(euroPrice * 655.957);

export const products: Product[] = [
  // Accessoires
  {
    id: 1,
    name: "Montre Classic",
    price: 250,
    description: "Montre élégante en acier",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800",
    category: "Accessoires"
  },
  {
    id: 2,
    name: "Ceinture Cuir",
    price: 50,
    description: "Ceinture en cuir véritable avec boucle classique",
    image: "/src/images/product/accessoires/ceintures/ceinture-cuir.webp",
    category: "Accessoires"
  },
  {
    id: 3,
    name: "Lunettes de Soleil Aviator",
    price: 150,
    description: "Lunettes de soleil aviateur polarisés",
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
    name: "Chemise Atlas",
    price: 100,
    description: "Chemise Blanche à motifs Col Mao",
    image: "/src/images/product/vetements/homme/chemises/atlas-colle-mao.webp",
    category: "Vêtements"
  },
  {
    id: 6,
    name: "Louis Vuitton",
    price: 100,
    description: "Louis Vuitton Sweatshirt aquarelle",
    image: "/src/images/product/vetements/homme/chemises/louis-water-color.webp",
    category: "Vêtements"
  },
  {
    id: 7,
    name: "T-shirt Lyriq",
    price: 100,
    description: "Chemise Lyriq au couleur vert foncé, col décontracté à manches courtes, tissu plantes",
    image: "/src/images/product/vetements/homme/chemises/lyriq.webp",
    category: "Vêtements"
  },
  {
    id: 8,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 9,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 10,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 11,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 12,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 13,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 14,
    name: "Chemise Lin Premium",
    price: 100,
    description: "Chemise en lin naturel, coupe moderne",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 15,
    name: "Robe d'Été",
    price: 75,
    description: "Robe légère en coton avec motif fleuri",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },
  {
    id: 16,
    name: "Blazer Élégant",
    price: 125,
    description: "Blazer structuré en laine mélangée",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800",
    category: "Vêtements"
  },

  // Parfums
  {
    id: 17,
    name: "Parfum Élégance",
    price: 500,
    description: "Parfum raffiné aux notes boisées et florales",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800",
    category: "Parfums"
  },
  {
    id: 18,
    name: "Parfum Mystique",
    price: 750,
    description: "Parfum envoûtant aux notes orientales",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800",
    category: "Parfums"
  },
  {
    id: 19,
    name: "Parfum Ocean",
    price: 250,
    description: "Parfum frais aux notes marines et agrumes",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800",
    category: "Parfums"
  },

  // Chaussures
  {
    id: 20,
    name: "Sneakers Urban",
    price: 150,
    description: "Sneakers confortables au design moderne",
    image: "/src/images/product/chaussures/homme/sneaker-rouge.avif",
    category: "Chaussures"
  },
  {
    id: 11,
    name: "Boots Cuir",
    price: 250,
    description: "Boots en cuir véritable, style intemporel",
    image: "/src/images/product/chaussures/homme/boot-cuire.avif",
    category: "Chaussures"
  },
  {
    id: 22,
    name: "Chelsea Boots Cuir",
    price: 250,
    description: "Boots en cuir véritable, style intemporel",
    image: "/src/images/product/chaussures/homme/chelsea-boots-cuir.webp",
    category: "Chaussures"
  },
  {
    id: 23,
    name: "Timberlan Preminium 6",
    price: 250,
    description: "Timberlan Preminium 6 Pouces Pour femme",
    image: "/src/images/product/chaussures/homme/timberland-preminium.webp",
    category: "Chaussures"
  },
  {
    id: 24,
    name: "Louis Vuitton Boots Hiking",
    price: 250,
    description: "Tige en daim, cuir et textile Semelle en caoutchouc épaisse Fabriqué en Italie Convenable sans boîte",
    image: "/src/images/product/chaussures/homme/lv-hiking-boots.avif",
    category: "Chaussures"
  },
  {
    id: 25,
    name: "Escarpins Classiques",
    price: 100,
    description: "Escarpins en cuir avec talon de 8cm",
    image: "/src/images/product/chaussures/femme/escarpins.avif",
    category: "Chaussures"
  },
  {
    id: 26,
    name: "Escarpins Cuir",
    price: 100,
    description: "Escarpins en cuir daim bleu marine fabriqué à la main",
    image: "/src/images/product/chaussures/femme/escarpin-classique-cuir-daim-bleu-marine.avif",
    category: "Chaussures"
  },
  {
    id: 27,
    name: "Escarpins Ouverte",
    price: 100,
    description: "Escarpins ouverte à bride noir  vernis talon 13cm grande taille 35 au 44",
    image: "/src/images/product/chaussures/femme/escarpin-ouvert-a-bride-noir-vernis-talon-13-cm-grande-taille-35-au-44.webp",
    category: "Chaussures"
  },
  {
    id: 28,
    name: "Escarpins en Daim Rouge",
    price: 100,
    description: "Escarpins en Daim de couleur Rouge. Talons fins doublés au même ton de 10 cm pour les petites pointures du 32 au 35. Talons de 11 cm pour les grandes pointures du 42 au 45.",
    image: "/src/images/product/chaussures/femme/ISABELANTEROJO_A05.webp",
    category: "Chaussures"
  },
  {
    id: 29,
    name: "Nike AF1",
    price: 150,
    description: "Nike Air Force 1 noire et blanc tout taille",
    image: "/src/images/product/chaussures/homme/af1-noire.avif",
    category: "Chaussures"
  },
  {
    id: 30,
    name: "Nike AF1 Multi-Color",
    price: 250,
    description: "Nike AF1 Multi-Color taille (39, 40, 41, 42, 43)",
    image: "/src/images/product/chaussures/homme/af1-multi.avif",
    category: "Chaussures"
  },
  {
    id: 31,
    name: "Nike AF1",
    price: 100,
    description: "Nike AF1 gris et noire",
    image: "/src/images/product/chaussures/homme/af1-gn.avif",
    category: "Chaussures"
  },
  {
    id: 32,
    name: "New Balance",
    price: 150,
    description: "Chaussure new Balance vert et noir",
    image: "/src/images/product/chaussures/homme/new-balance.avif",
    category: "Chaussures"
  },
  {
    id: 33,
    name: "Air Jordan 4",
    price: 250,
    description: "Nike Air Jordan 4",
    image: "/src/images/product/chaussures/homme/air-jordan-4.avif",
    category: "Chaussures"
  },
  {
    id: 34,
    name: "Nike Montante",
    price: 100,
    description: "Chaussure Nike Montante Blanc",
    image: "/src/images/product/chaussures/homme/nike-montante.avif",
    category: "Chaussures"
  },
  {
    id: 35,
    name: "Adidas Campus",
    price: 100,
    description: "Chaussure Adidas Campus vert",
    image: "/src/images/product/chaussures/homme/adidas-campus.avif",
    category: "Chaussures"
  },
  {
    id: 36,
    name: "Adidas Campus",
    price: 100,
    description: "Chaussure Adidas Campus Blanc",
    image: "/src/images/product/chaussures/homme/adidas-campus-white-kuwait.avif",
    category: "Chaussures"
  },
  
  {
    id: 37,
    name: "Chaussure Traditionnelle",
    price: 100,
    description: "Chaussure Traditionnelle",
    image: "/src/images/product/chaussures/homme/tra-1.webp",
    category: "Chaussures"
  },
  {
    id: 38,
    name: "Chaussure Traditionnelle",
    price: 100,
    description: "Chaussure Traditionnelle Noir",
    image: "/src/images/product/chaussures/homme/tra-2.webp",
    category: "Chaussures"
  },
  {
    id: 39,
    name: "Chaussure Traditionnelle",
    price: 100,
    description: "Chaussure Traditionnelle Noir",
    image: "/src/images/product/chaussures/homme/tra-3.webp",
    category: "Chaussures"
  },
  {
    id: 40,
    name: "Chaussure Traditionnelle",
    price: 100,
    description: "Chaussure Traditionnelle Noir",
    image: "/src/images/product/chaussures/homme/tra-4.webp",
    category: "Chaussures"
  },
  // Sacs
  {
    id: 41,
    name: "Sac en Cuir",
    price: 150,
    description: "Sac à main en cuir véritable fait main",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800",
    category: "Sacs"
  },
  {
    id: 42,
    name: "Sac à Dos Urban",
    price: 100,
    description: "Sac à dos moderne et fonctionnel",
    image: "https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sacs"
  },
  {
    id: 43,
    name: "Pochette Soirée",
    price: 150,
    description: "Pochette élégante pour vos soirées",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800",
    category: "Sacs"
  }
];