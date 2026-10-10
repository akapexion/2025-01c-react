import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Counter from './components/Counter'
import Weather from './pages/Weather'
// import Toggle from './components/Toggle'

const App = () => {
  return (
    <>

        <BrowserRouter>
              <Navbar/>
                  <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/counter-app" element={<Counter/>}/>
                        <Route path="/weather-data" element={<Weather/>}/>
                  </Routes>
              <Footer/>
        </BrowserRouter>

    </>
  )
}

export default App