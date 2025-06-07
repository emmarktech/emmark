import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import Facts from './Pages/Facts'
// import Click from './Pages/Clicks'
import Products from './Pages/Products'
import Clients from './Pages/Clients'
import Partners from './Pages/Partners'
import Vision from './Pages/Vision'
import Team from './Pages/Team'
// import Patners from './Pages/Patners'

import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/700.css'; // Optional for bold




const App = () => {
  return (
    <div  className='font-sans'>
      <Navbar/>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/facts' element={<Facts/>}/>
        {/* <Route path='/click' element={<Click/>}/> */}
        <Route path='/products' element={<Products/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/partners' element={<Partners/>}/>
        <Route path='/vision' element={<Vision/>}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App