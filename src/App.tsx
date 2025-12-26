import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Product, CartItem, Category } from './types';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PromotionsPage from './pages/PromotionsPage';
import PaymentSuccess from './pages/PaymentSuccess';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UserDashboard from './pages/UserDashboard';
import { LikedProductsProvider } from './context/LikedProductsContext';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
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
    const hideFooterPaths = ['/login', '/register', '/forgot-password', '/payment-success', '/dashboard'];
    setShowFooter(!hideFooterPaths.includes(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    // Scroll to element if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Small delay to ensure DOM is ready
      }
    } else {
      // Scroll to top for pages without hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const addToCart = (product: Product) => {
    if (!isLoggedIn) {
      // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
      navigate('/login');
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

  const handleNavigate = (page: string, sectionId?: string) => {
    const path = `/${page}${sectionId ? `#${sectionId}` : ''}`;
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={location.pathname.substring(1)}
        onLoginClick={() => navigate('/login')}
        showHero={location.pathname === '/home'}
      />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage onAddToCart={addToCart} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/promotions" element={<PromotionsPage onAddToCart={addToCart} />} />
          <Route path="/payment-success" element={<PaymentSuccess onNavigate={handleNavigate} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>

      {showFooter && (
        <Footer onNavigate={handleNavigate} />
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
  );
}

export default function App() {
  return (
    <LikedProductsProvider>
      <Router>
        <AppContent />
      </Router>
    </LikedProductsProvider>
  );
}