import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Layout from './layout/layout';

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


          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
