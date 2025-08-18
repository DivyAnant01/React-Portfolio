import React from 'react'
import Nav from './components/nav/nav'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Certificates from "./pages/certificates/Certificates"
import Contact from "./pages/contact/Contact"
import Services from './pages/services/Services';




function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App