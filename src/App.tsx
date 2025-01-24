import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Product, CartItem, Category } from './types';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PaymentSuccess from './pages/PaymentSuccess';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
          onNavigate={(page) => window.location.href = `/${page}`}
          currentPage={window.location.pathname.substring(1)}
          onLoginClick={() => console.log('Login clicked')}
          showHero={window.location.pathname === '/'}
        />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/payment-success" element={<PaymentSuccess onNavigate={(page) => window.location.href = `/${page}`} />} />
            <Route path="/shop" element={<ShopPage onAddToCart={addToCart} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage onAddToCart={addToCart} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />} />
          </Routes>
        </div>

        {location.pathname !== '/payment-success' && (
          <Footer onNavigate={(page) => window.location.href = `/${page}`} />
        )}


        {isCartOpen && (
          <Cart
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
        )}
      </div>
    </Router>
  );
}