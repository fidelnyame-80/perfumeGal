import React from 'react'
import Home from './Pages/Home'
import ShopPage from './Pages/Shop'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'


const App = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<ShopPage />} />
    </Routes>
    
    </>
  )
}

export default App