import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Endpoint Webhook
router.post('/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Gestion des événements Stripe
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Paiement réussi pour la session:', session.id);
      // Ajoutez ici la logique métier, par ex. : mise à jour de la commande
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('Webhook reçu avec succès.');
});

export default router;