import { useState } from 'react'

import './App.css'

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Carts from './pages/Carts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PlaceOrder from './components/PlaceOrder'



function App() {


  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Carts/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
