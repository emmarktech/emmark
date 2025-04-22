import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import Facts from './Pages/Facts'
import Click from './Pages/Clicks'
import Products from './Pages/Products'



const App = () => {
  return (
    <div  >
      <Navbar/>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/facts' element={<Facts/>}/>
        <Route path='/click' element={<Click/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App