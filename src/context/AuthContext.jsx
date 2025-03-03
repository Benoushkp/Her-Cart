import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Helper function to safely get user data from localStorage
const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user')) || null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

// Mock token verification function
const verifyToken = async (token) => {
  // Simulate token validation
  return !!token; // Simply check if token exists
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuthState = async () => {
      const userData = getStoredUser();
      
      if (userData?.token) {
        try {
          const isValid = await verifyToken(userData.token);
          setIsAuthenticated(isValid);
          
          if (!isValid) {
            localStorage.removeItem('user');
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('user');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      
      setIsLoading(false);
    };

    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        verifyAuthState();
      }
    };

    verifyAuthState();
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (userData) => {
    if (!userData?.token) {
      console.error('Login requires a token');
      return;
    }
    
    try {
      localStorage.setItem('user', JSON.stringify({
        token: userData.token,
        // Add other user data as needed
      }));
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  // Mock login function for development
  const mockLogin = () => {
    const mockUserData = {
      token: 'mock-token-123', // Mock token
      userId: 'user-123', // Mock user ID
      name: 'Test User', // Mock user name
    };
    login(mockUserData);
  };

  if (isLoading) {
    return <div>Loading authentication state...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isLoading, 
      login, 
      logout,
      mockLogin // Expose mockLogin for development
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};