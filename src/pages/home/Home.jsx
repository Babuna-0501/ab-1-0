import React from 'react'
import Banner from '../../components/banner/Banner';
import Products from '../../components/products/Products';
import "./home.css";




const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Products/>
    </div>
  )
}

export default Home