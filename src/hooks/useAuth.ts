import { useState, useEffect, useCallback } from 'react';
import { isLoggedIn, getUserName, logoutUser } from '../services/authService';

export function useAuth() {
  // Initialiser immédiatement depuis localStorage pour éviter les flashs/redirects prématurés
  const [userName, setUserName] = useState<string | null>(() => getUserName());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => isLoggedIn());
  const [authTrigger, setAuthTrigger] = useState(0);

  const checkAuth = useCallback(() => {
    const loggedIn = isLoggedIn();
    const name = getUserName();
    setIsAuthenticated(loggedIn);
    if (loggedIn) {
      setUserName(name);
    } else {
      setUserName(null);
    }
  }, []);

  useEffect(() => {
    checkAuth();

    // Écouter les changements d'authentification (par exemple après login/logout)
    const handleAuthChange = () => {
      setAuthTrigger(prev => prev + 1); // Force re-render
      checkAuth();
    };
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, [checkAuth, authTrigger]);

  const logout = () => {
    logoutUser();
    setUserName(null);
    setIsAuthenticated(false);
    // Déclencher un événement pour notifier les autres composants
    window.dispatchEvent(new Event('authChange'));
  };

  return {
    userName,
    isAuthenticated,
    logout
  };
}