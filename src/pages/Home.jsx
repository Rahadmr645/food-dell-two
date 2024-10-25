import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodList from '../components/FoodList';
import Footer from '../components/Footer';

const Home = () => {

  const [catagory, setCatagory] = useState('All');

  return (
    <div className='home-container ms-5 me-5' >
       
        <Header/>
        <ExploreMenu catagory={catagory} setCatagory={setCatagory}  />
        <FoodList catagory={catagory}/>
        
    </div>
  )
}

export default Home;