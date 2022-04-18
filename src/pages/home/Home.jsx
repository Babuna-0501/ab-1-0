import React from 'react'
import Banner from '../../components/banner/Banner';
import Products from '../../components/products/Products';
import Example from '../../components/storepay/Storepay'
import "./home.css";




const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Products/>
        <Example/>
    </div>
  )
}

export default Home