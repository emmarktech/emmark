import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import ReactGA from 'react-ga4'; // ✅ GA import
ReactGA.initialize("G-EJW03PCDN0"); // ✅ Your GA4 Measurement ID

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/Privacy';
import Facts from './Pages/Facts';
import Products from './Pages/Products';
import Clients from './Pages/Clients';
import Partners from './Pages/Partners';
import Team from './Pages/Team';

// Components
import Navbar from './Components/Navbar';

// Fonts and Styles
import '@fontsource/inter';
import '@fontsource/inter/700.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import OurPortFolio from './Pages/OurPortFolio';
import ScrollToTop from './Pages/scrollToTop';

// ✅ Google Analytics listener
const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div className='font'>
      <ToastContainer />
        <GAListener />
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/facts' element={<Facts />} />
          <Route path='/products' element={<Products />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/portfolio' element={<OurPortFolio/>} />
          <Route path='/team' element={<Team />} />
        </Routes>
    </div>
  );
};

export default App;
