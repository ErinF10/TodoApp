// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import UserInfo from './components/UserInfo';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todo-app" element={<App />} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
