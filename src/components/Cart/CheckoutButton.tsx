import React, { useState } from 'react';
import { createCheckoutSession } from '../../services/api/stripe';
import type { CartItem } from '../../types';

interface CheckoutButtonProps {
  items: CartItem[];
  disabled?: boolean;
}

export default function CheckoutButton({ items, disabled }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      // Sauvegarder les articles du panier pour les enregistrer après le paiement
      try {
        // Convertir le prix en FCFA (aligné avec l'affichage du panier: prix × 100)
        const payload = items.map(i => ({ 
          id: i.id, 
          name: i.name, 
          price: i.price * 100, 
          quantity: i.quantity, 
          image: i.image 
        }));
        localStorage.setItem('lastOrderItems', JSON.stringify(payload));
      } catch (e) {
        console.warn('Impossible de sauvegarder les articles du panier avant paiement:', e);
      }
      await createCheckoutSession(items);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Une erreur est survenue lors du paiement. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled || items.length === 0 || isLoading}
      className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
        disabled || items.length === 0 || isLoading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {isLoading ? 'Chargement...' : 'Procéder au paiement'}
    </button>
  );
}