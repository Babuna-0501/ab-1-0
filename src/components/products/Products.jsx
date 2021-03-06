import React from 'react'
import { Tabs } from "@yazanaabed/react-tabs";
import './products.css'
import Product from '../product/Product';
import Product2 from '../product2/product2';
import Product3 from '../product3/product3';
import Product4 from '../product4/product4';
import Phone from '../product_phone/phone';
import Watch from '../product_watch/watch';
// import Tabs from '../Tabs/Tabs';

const Products = () => {
  return (
    <div className='products'>
        <h2>Бэлэн байгаа бараанууд</h2>
        <Tabs
            activeTab={{
                id: "tab1"
            }}
            className='product_tab_inner'
            >
            <Tabs.Tab id="tab1" title="Цахилгаан бараа" style={{ backgroundColor: '#000' }}>
                <div className='prod-wrapper'><Product/><Product2/><Product4/><Product3/><Product/><Product2/><Product4/><Product3/></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Гар утас">
                <div className='prod-wrapper'><Phone/><Watch/><Watch/></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Компьютер">
                <div className='prod-wrapper'><Phone/><Watch/><Watch/></div>
            </Tabs.Tab>
        </Tabs>
    </div>
  )
}

export default Products;