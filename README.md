# Stripe Checkout Integration Issue

## Problem Description
I'm encountering a `parameter_invalid_integer` error with Stripe Checkout integration. This occurs when attempting to create a checkout session with product line items.

## Project Structure
```
│   .env
│   .gitignore
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   postcss.config.js
│   tailwind.config.js
│   tsconfig.app.json
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
└───src
    │   App.tsx
    │   index.css
    │   main.tsx
    │   vite-env.d.ts
    │   
    ├───components
    │   │   Cart.tsx
    │   │   CategoryFilter.tsx
    │   │   CategoryGrid.tsx
    │   │   DesktopMenu.tsx
    │   │   Footer.tsx
    │   │   HeroBanner.tsx
    │   │   MobileMenu.tsx
    │   │   Navbar.tsx
    │   │   NewArrivalsSection.tsx
    │   │   ProductCard.tsx
    │   │   ProductModal.tsx
    │   │   PromotionsSection.tsx
    │   │   UserMenu.tsx
    │   │   
    │   ├───Cart
    │   │       CheckoutButton.tsx
    │   │       
    │   └───Navbar
    │           index.tsx
    │           NavbarCarousel.tsx
    │           NavbarContent.tsx
    │           
    ├───data
    │       categories.ts
    │       categoryImages.ts
    │       products.ts
    │       slides.ts
    │       
    ├───images
    │       hero-1.jpg
    │       hero-2.jpg
    │       hero-3.jpg
    │       
    ├───pages
    │       AboutPage.tsx
    │       ContactPage.tsx
    │       HomePage.tsx
    │       NewArrivalsPage.tsx
    │       PaymentCancel.tsx
    │       PaymentSuccess.tsx
    │       PromotionsPage.tsx
    │       ShopPage.tsx
    │       
    ├───server
    │       index.js
    │       index.ts
    │       
    ├───services
    │   │   stripe.ts
    │   │   
    │   └───api
    │           config.ts
    │           stripe.ts
    │           
    └───types
            index.ts
```

## Current Implementation

### Client-side code (stripe.ts)
```typescript
// Relevant part where the error occurs
const response = await fetch(STRIPE_CONFIG.urls.checkout, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    items: items.map(item => ({
      price_data: {
        currency: STRIPE_CONFIG.currency,
        product_data: {
          name: item.name,
          description: item.description,
          images: item.image ? [item.image] : undefined,
        },
        unit_amount: convertToStripeAmount(item.price),
      },
      quantity: item.quantity,
    })),
  }),
});
```

### Price conversion utility
```typescript
export function convertToStripeAmount(price: number): number {
  return Math.round(price * 100);
}
```

## Error Message
```
parameter_invalid_integer
```

## Steps to Reproduce
1. Add items to cart
2. Click checkout button
3. Error occurs during Stripe session creation

## What I've Tried
- Implemented price conversion to handle cents (multiply by 100)
- Added validation for prices and quantities
- Ensured all amounts are positive numbers
- Verified that `unit_amount` is being properly rounded to an integer
- Checked that quantity values are valid integers

## Environment
- Node.js version: 18.x
- Stripe API version: 2023-10-16
- @stripe/stripe-js: ^2.1.0
- express: ^4.18.2

## Debugging Information
To help diagnose the issue:
1. All prices are being converted from dollars to cents using `convertToStripeAmount`
2. Input validation is implemented for both price and quantity
3. The server validates the request body before creating the Stripe session

## Questions
1. Is the price conversion implemented correctly for Stripe's expected format?
2. Are there any edge cases in the price conversion that could result in invalid integers?
3. How can I add additional logging to identify which specific value is causing the error?
4. Could there be an issue with the way quantities are being handled?

## Additional Context
- The application uses TypeScript for type safety
- Price values are stored as numbers representing dollar amounts
- The conversion to cents happens just before sending to Stripe
- All API calls are made through a centralized service layer
- Error handling is implemented both client and server-side

## Repository Purpose
This repository is created to seek help from the community in resolving the Stripe Checkout integration issue. Any insights, code reviews, or suggestions for debugging approaches would be greatly appreciated.
