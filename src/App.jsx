import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contacts from './pages/contacts'
import FAQ from './pages/faq'

export default function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          
        </Routes>
    </Router>
    
    </>
  )
}
  
