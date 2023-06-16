import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Layout from './layout/layout';
import { Home } from './pages/Home';
import Orderhistory from './components/userprofile/orderhistory';
import { Userprofile } from './pages/Userprofile';
import { Profilehome } from './components/userprofile/profilehome';

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
            <Route path='/' element={<Home />} />
            <Route path='/userprofile' element={<Userprofile />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
