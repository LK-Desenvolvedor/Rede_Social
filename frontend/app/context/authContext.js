import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (isAdmin) => {
    setIsAuthenticated(true);
    // Armazene mais informações, como o tipo de usuário, se necessário
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Remova o token do armazenamento e outros estados de autenticação
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
