import React from 'react';
import Dashboard from './pages/Dashboard';
import Layout from './components/shared/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './pages/UserManagement';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<UserManagement />} />
        </Route>
        {/* route here does not have sidebar and top nav */}
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
