import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import webhookRoute from './webhook.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charger les variables d'environnement depuis la racine du projet
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log('Clé Stripe chargée:', process.env.STRIPE_SECRET_KEY ? 'Oui' : 'Non');

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

app.use(cors());
app.use(express.json());

app.use('/webhook', webhookRoute);

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;

    console.log('=== DONNÉES REÇUES DU CLIENT ===');
    console.log('Items reçus:', items.length);

    if (!items || !Array.isArray(items)) {
      throw new Error('Invalid items array');
    }

    let totalExpected = 0;
    const lineItems = items.map(item => {
      const price = Number(item.price);
      if (isNaN(price) || price <= 0) {
        throw new Error(`Prix invalide pour l'article: ${item.name} (${item.price})`);
      }

      const itemTotal = price * item.quantity;
      totalExpected += itemTotal;

      console.log(`📦 ${item.name}: ${(price * 100).toLocaleString()} × ${item.quantity} = ${(price * 100 * item.quantity).toLocaleString()} (centimes: ${Math.round(price * 100)} × ${item.quantity} = ${Math.round(price * 100) * item.quantity})`);

      return {
        price_data: {
          currency: 'xof',
          product_data: {
            name: item.name,
            description: item.description,
            images: [item.image],
          },
          unit_amount: Math.round(price * 100), // Conversion en cents
        },
        quantity: item.quantity,
      };
    });

    console.log(`💰 TOTAL ATTENDU: ${(totalExpected * 100).toLocaleString()}`);
    console.log('=====================================');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
      locale: 'fr',
      payment_intent_data: {
        description: `Paiement BG Fashion - ${items.length} article(s) - Total: ${(totalExpected * 100).toLocaleString()}`,
        metadata: {
          total_amount: (totalExpected * 100).toString(),
          item_count: items.length.toString()
        }
      }
    });

    console.log(`✅ Session Stripe créée: ${session.id}`);
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('❌ Erreur lors de la création de la session de paiement:', error);
    res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});