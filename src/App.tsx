import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Product, CartItem, Category } from './types';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PaymentSuccess from './pages/PaymentSuccess';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import { LikedProductsProvider } from './context/LikedProductsContext';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const hideFooterPaths = ['/login', '/register', '/payment-success', '/dashboard'];
    setShowFooter(!hideFooterPaths.includes(window.location.pathname));
  }, [window.location.pathname]);

  const addToCart = (product: Product) => {
    if (!isLoggedIn) {
      // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }
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
    <LikedProductsProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar
            cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            onCartClick={() => setIsCartOpen(true)}
            currentPage={window.location.pathname.substring(1)}
            onLoginClick={() => window.location.href = '/login'}
            showHero={window.location.pathname === '/home'}
          />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage onAddToCart={addToCart} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />} />
              <Route path="/shop" element={<ShopPage onAddToCart={addToCart} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/payment-success" element={<PaymentSuccess onNavigate={(page) => window.location.href = `/${page}`} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>

          {showFooter && (
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
    </LikedProductsProvider>
  );
}