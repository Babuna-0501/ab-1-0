// import { useState } from 'react';
// import { useDispatch } from 'react-redux'
// import { addToBasket } from "../../slices/basketSlice";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Img1 from '../../assets/prod_example_img1.webp';
import Img2 from '../../assets/prod_example_img2.webp';
import Img3 from '../../assets/prod_example_img3.webp'
import Img4 from '../../assets/prod_example_img4.webp'
import Img5 from '../../assets/prod_example_img5.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import './productDetail.css'
import { Link } from 'react-router-dom';
import Product from "../product/Product";
import Product2 from "../product2/product2";
 

function ProductDetail({id, brand, price, desc, category, image }) {
    // const dispatch = useDispatch();
    
    // const addItemToBasket = () => {     
    //     const product = {
    //         id, 
    //         brand, 
    //         price, 
    //         desc, 
    //         category, 
    //         image,
    //         newProduct,
    //     };
    //     // Sending the product as an action to the REDUX store... the basket slice
    //     dispatch(addToBasket(product))
    // };

    return ( 
        <div className='productDetail'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
                className='carousel'
            >
                <div>
                    <img loading='lazy' src={Img1} alt="" />
                </div>
                <div>
                    <img loading='lazy' src={Img2} alt="" />
                </div>
                <div>
                    <img loading='lazy' src={Img3} alt="" />
                </div>
                <div>
                    <img loading='lazy' src={Img4} alt="" />
                </div>
                <div>
                    <img loading='lazy' src={Img5} alt="" />
                </div>
            </Carousel>
            <div className="productDetail_wrapper">
                <div className='productDetail_info'>
                    <div className='left'>
                        <div className='productDetail_info--brand'><img src={Brand} alt="lazy" /></div>
                        <div className='productDetail_info--desc'>Тоос сорогч</div>
                        <div className='productDetail_info--price'>
                            <span>319,900₮</span>
                            <span>639,800₮</span>
                        </div>
                    </div>
                    <div className='right'>
                        -50%
                    </div>
                </div>
                <div className='productDetail_payment'>
                    <div className='top'>
                        <Link to='/product/purchase'>
                            <button className="btn_purchase">Худалдан авах</button>
                        </Link>
                        <button className="btn_basket">Сагсанд нэмэх</button>
                    </div>
                    <div className='mid'>
                    <picture><img src=""alt="" /></picture>
                    </div>
                    <div className='prod_btm'>
                        <h3>Үндсэн мэдээлэл:</h3>
                        <div>Bagless Vacuum Cleaner</div>
                        <div>Хэмжээ: 40х28х24 см</div>
                        <div>Жин: 4.8 </div>
                        <div>Утастай</div>
                    </div>
                    <div className="related">
                        <h5>Төстэй бараанууд</h5>
                        <div className="productDetail_payment--prods"><Product/><Product2/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
