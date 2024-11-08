<<<<<<< HEAD
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import AddTransaction from './pages/AddTransaction';
import {Toaster} from 'react-hot-toast'
import SmartDealPage from './pages/SmartDealPage';
=======
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import AddTransaction from "./pages/AddTransaction";
import { Toaster } from "react-hot-toast";
import ChatBot from "./pages/Chatbot.jsx";
>>>>>>> eb127ec89f698547320c8a78e046cf3245b7837f

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
<<<<<<< HEAD
        <Route path="/smart-deal" element={<SmartDealPage />} />
=======
        <Route path="/chat" element={<ChatBot />} />
>>>>>>> eb127ec89f698547320c8a78e046cf3245b7837f
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
