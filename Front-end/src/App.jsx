import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Layout from './layout/layout';
import Userprofile  from './pages/Userprofile';
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
            <Route index path="/" element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Passwordrest/:resetToken" element={<ResetPassword />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path='/userprofile/:id' element={<Userprofile />} />
            <Route path="/About" element={<About />} />
            <Route path='/Contact' element={<ContactUs />} />
            <Route path='/Details' element={<Details />} />
          </Routes >
        </Layout >
      </BrowserRouter >
    </>
  )
}

export default App
