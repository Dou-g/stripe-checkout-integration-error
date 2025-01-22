import { loadStripe } from '@stripe/stripe-js';
import type { CartItem } from '../../types';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function createCheckoutSession(cartItems: CartItem[]): Promise<void> {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not loaded');

    // Validation des données avant d'envoyer
    const formattedItems = cartItems.map(item => {
      if (!item.price || isNaN(Number(item.price))) {
        throw new Error(`Invalid price for item: ${item.name}`);
      }
      return {
        ...item,
        price: Number(item.price),
      };
    });

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