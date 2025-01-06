import { loadStripe } from '@stripe/stripe-js';
import type { CartItem } from '../../types';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function createCheckoutSession(items: CartItem[]): Promise<void> {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not initialized');

    // Créer la session de paiement
    const response = await fetch('http://localhost:3000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: items.map(item => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              description: item.description,
              images: [item.image],
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
      }),
    });

    const { sessionId } = await response.json();

    // Rediriger vers Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId
    });

    if (error) throw error;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
}