import React, { useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/CheckOut1';
import AdvancedCheckout from './pages/AdvancedCheckout';
import Collections from './pages/Collections';
import ShopNow from './pages/ShopNow';
import ProductDetails from './pages/ProductDetails';
import DailyWears from './pages/DailyWears';
import BridalWears from './pages/BridalWears';
import PartyWears from './pages/PartyWears';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import './App.css';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Memoized authentication route check
  const isAuthRoute = useMemo(() => [
    '/login', 
    '/signup', 
    '/forgot-password', 
    '/reset-password'
  ].includes(location.pathname), [location.pathname]);

  // Memoized navbar selection logic
  const navbarComponent = useMemo(() => {
    if (isAuthRoute) return null;
    return isAuthenticated ? <Navbar2 /> : <Navbar />;
  }, [isAuthenticated, isAuthRoute]);

  return (
    <>
      {navbarComponent}
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/daily-wears" element={<DailyWears />} />
        <Route path="/bridal-wears" element={<BridalWears />} />
        <Route path="/party-wears" element={<PartyWears />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* Protected Routes */}
        <Route path="/cart" element={
          isAuthenticated ? <Cart /> : <Navigate to="/login" />
        } />
        <Route path="/shop" element={
          isAuthenticated ? <ShopNow /> : <Navigate to="/login" />
        } />
        <Route path="/checkout" element={
          isAuthenticated ? <Checkout /> : <Navigate to="/login" />
        } />
        <Route path="/advanced-checkout" element={
          isAuthenticated ? <AdvancedCheckout /> : <Navigate to="/login" />
        } />

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;