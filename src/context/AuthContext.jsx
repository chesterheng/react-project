import React, { useState, createContext } from "react";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("userInfo");
  const expiresAt = localStorage.getItem("expiresAt");
  const [authState, setAuthState] = useState({
    token: null,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
    expiresAt,
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("expiresAt", expiresAt);
    setAuthState({
      token,
      userInfo,
      expiresAt,
    });
  };

  const logout = () => {};

  const isAuthenticated = () => {};

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        isAuthenticated,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
