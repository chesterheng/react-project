import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import UserManagement from './pages/UserManagement';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<UserManagement />} />
        </Route>
        {/* route here does not have sidebar and top nav */}
        <Route path="login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
