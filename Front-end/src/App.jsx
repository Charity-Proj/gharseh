import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services';

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
            <Route index path="/" element={<Home/>} />
            <Route path='/services' element={<Services/>}/>


          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
