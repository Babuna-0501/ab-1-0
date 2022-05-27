import React from 'react'
import Banner from '../../components/banner/Banner';
import Btm from '../../components/btm/btm';
import Products from '../../components/products/Products';
import "./home.css";




const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Products/>
        <Btm/>
    </div>
  )
}

export default Home