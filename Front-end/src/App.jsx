
import { useEffect, useState } from 'react'
import './App.css'
import Orderhistory from './components/userprofile/orderhistory';
import { Userprofile } from './pages/Userprofile';
import { Profilehome } from './components/userprofile/profilehome';
import { VolunteerHistory } from './components/userprofile/volunteerHistory';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from './Layout/Layout';
import Signup from './regesration/Signup';
import Login from './regesration/Login';
import ForgotPassword from './regesration/forgotPassword';
import ResetPassword from './regesration/resetPassword';
import Payment from './components/Payment/payment';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ContactUs from './pages/Contact';
import Details from './pages/Details';


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
            <Route path='/userprofile' element={<Userprofile />} />
            <Route index path="/" element={<Home/>} />
            <Route path='/services' element={<Services/>}/>             
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Passwordrest/:resetToken" element={<ResetPassword />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/About" element={<About />} />
            <Route path='/Contact' element={<ContactUs />} />
            <Route path='/Details' element={<Details/>} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
