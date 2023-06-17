import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Layout from './layout/layout';
import { Home } from './pages/Home';
import Orderhistory from './components/userprofile/orderhistory';
import { Userprofile } from './pages/Userprofile';
import { Profilehome } from './components/userprofile/profilehome';
import { VolunteerHistory } from './components/userprofile/volunteerHistory';

import Signup from './regesration/Signup';
import Login from './regesration/Login';
import ForgotPassword from './regesration/forgotPassword';
import ResetPassword from './regesration/resetPassword';
import Payment from './components/Payment/payment';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Passwordrest/:resetToken" element={<ResetPassword />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path='/' element={<Home />} />
            <Route path='/userprofile' element={<Userprofile />} />

          </Routes >
        </Layout >
      </BrowserRouter >
    </>
  )
}

export default App
