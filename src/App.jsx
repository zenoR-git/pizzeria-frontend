import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import HomeComponent from './components/HomeComponent'
import PizzaMaker from './components/PizzaMaker'
import PreMadePizza from './components/PreMadePizza'
import CartCheckout from './components/CartCheckout'


function App() {


  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomeComponent />} />
      <Route path="/make/pizza" element={<PizzaMaker />} />
      <Route path="/buy/pizza" element={<PreMadePizza/>} />
      <Route path="/cart" element={<CartCheckout/>} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
