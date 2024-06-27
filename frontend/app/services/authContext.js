import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); 
      setIsAuthenticated(true);
      setIsAdmin(decodedToken.tipo === 'admin');
      setCurrentUser(decodedToken); 
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      const decodedToken = JSON.parse(atob(token.split('.')[1])); 
      setIsAuthenticated(true);
      setIsAdmin(decodedToken.tipo === 'admin');
      setCurrentUser(decodedToken); 
    } catch (error) {
      console.error('Login falhou', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
