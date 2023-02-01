import React, { useState, createContext } from "react";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({});

  const logout = () => {};

  const isAuthenticated = () => {};

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        isAuthenticated,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
