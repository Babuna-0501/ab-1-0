import React from 'react'
import Banner from '../../components/banner/Banner';
import Btm from '../../components/btm/btm';
import Products from '../../components/products/Products';
import Footer from '../../components/footer/footer';
import "./home.css";




const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Products/>
        <Btm/>
        <Footer/>
    </div>
  )
}

export default Home;