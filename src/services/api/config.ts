import { loadStripe } from '@stripe/stripe-js';

export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
export const API_URL = 'https://api.example.com'; // À remplacer par votre URL d'API

export const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);