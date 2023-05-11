"use client"
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { verifyToken } from './authUtils'; // Your custom authentication utility function

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated on initial load
    const token = localStorage.getItem('token');
    if (token) {
      const verified = verifyToken(token); // Custom function to verify JWT token
      if (verified.valid) {
        setIsLoggedIn(true);
        setUser(verified.user);
      } else {
        // Invalid or expired token, logout the user
        logout();
      }
    }
  }, []);

  // Login function
  const login = (token, user) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem('token', token)
    console.log(token) // Store the token in local storage
    window.location.href='/'; // Redirect to dashboard after successful login
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('token'); // Remove the token from local storage
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
