import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ChatBot from './pages/Chatbot.jsx';
import AddTransaction from './pages/AddTransaction';
// import AddTransactionSuccess from './pages/AddTransactionSuccess';
import {Toaster} from 'react-hot-toast'
// import NotificationTestPage from './pages/NotificationTestPage';



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
        {/* <Route path="/home" element={<NotificationTestPage />}/> */}
        <Route path='/chat' element={<ChatBot/>}/>
        <Route path="/add-transaction" element={<AddTransaction />} />
        {/* <Route path="/add-transaction-success" element={<AddTransactionSuccess />} /> */}
        {/* <Route path="/home" element={<NotificationTestPage />}/> */}
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
