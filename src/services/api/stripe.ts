import { loadStripe } from '@stripe/stripe-js';
import type { CartItem } from '../../types';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function createCheckoutSession(cartItems: CartItem[]): Promise<void> {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not loaded');

    // Validation et logging des prix avant envoi
    console.log('=== DONNÉES ENVOYÉES À STRIPE ===');
    const formattedItems = cartItems.map(item => {
      const price = Number(item.price);
      if (!item.price || isNaN(price) || price <= 0) {
        throw new Error(`Prix invalide pour l'article: ${item.name} (${item.price})`);
      }

      console.log(`📦 ${item.name}: ${(price * 100).toLocaleString()} × ${item.quantity} = ${(price * 100 * item.quantity).toLocaleString()}`);

      return {
        ...item,
        price: price, // Assure que c'est un nombre
      };
    });

    const totalAmount = formattedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`💰 TOTAL CALCULÉ: ${(totalAmount * 100).toLocaleString()}`);
    console.log('=====================================');

    const response = await fetch('http://localhost:3000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: formattedItems }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId } = await response.json();
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}