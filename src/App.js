import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login';
import Register from "./pages/register";
import Home from './pages/home';
import React from "react";

function App() {
// We will add routes for login and home page
  React.useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
