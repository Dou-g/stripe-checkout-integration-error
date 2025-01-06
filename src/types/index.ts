export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 
  | "Accessoires"
  | "Vêtements"
  | "Parfums"
  | "Chaussures"
  | "Sacs";