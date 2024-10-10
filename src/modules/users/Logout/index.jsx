import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Navbar } from "./components/Navbar";

export const logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "email" && password === "password") {
      console.log("Giriş başarılı");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      return true;
    }
    console.log("Giriş başarısız");
    return false;
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <AppRouter isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </Router>
  );
};
