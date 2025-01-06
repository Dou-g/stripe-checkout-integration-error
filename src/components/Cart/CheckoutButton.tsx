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