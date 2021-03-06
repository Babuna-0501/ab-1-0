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
import Store from '../../assets/storepay.png'
import './productDetail.css'
import { Link } from 'react-router-dom';
import Product from "../product/Product";
import Product2 from "../product2/product2";
import Product3 from "../product3/product3";
import Product4 from "../product4/product4";
import Share from "../../assets/share_sp.svg"
import Like from "../../assets/like_sp.svg"
import Store_sp from "../../assets/store_p_sp.png"
import Footer from "../footer/footer";



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
            <div className="prd_flex">
                <div style={{position:"relative"}}>
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
                <img className="share_btn" src={Share} alt="lazy" />
                <img className="like_btn" src={Like} alt="lazy" />
                </div>
  
                <div className="product_info_xl--right">
                    <div><img className="brand_icon" src={Brand} alt="" /></div>
                    <div className="top_xl">
                        <div className="title">???????? ????????????</div>
                        <div className="price_xl">
                            <div>
                            <p>319,900???</p>
                            <p>639,800???</p>
                            </div>
                            <div className="discount_xl">-50%</div>
                        </div>
                    </div>
                    <div className="center_xl">
                        <div className="color">
                            <p>????????: <span>??????????</span></p>
                            <div id="colors">
                                <label class="colors-container">  <span className="rd">1</span>
                                <input type="radio" checked="checked" name="radio"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="colors-container2">  <span className="rd">2</span>
                                <input type="radio" name="radio"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="colors-container3"> <span className="rd">3</span>
                                <input type="radio" name="radio"/>
                                <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="quantity">
                            <div>?????????????????? ????????????</div>
                            <div>
                                <label for='number-dd'><b>??????:</b></label>
                                <select id='number-dd' name='number'>
                                    <option value=''></option>
                                    <option value='one'>1</option>
                                    <option value='two'>2</option>
                                    <option value='three'>3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="storepay">
                        <img src={Store} alt="lazy" />
                    </div>
                    <div className="btns">
                        <button>???????????????? ????????</button>
                        <button>?????????????? ??????????</button>
                    </div>
                </div>
            </div>
            <div className="productDetail_wrapper_xl">
                <div className="product_info_xl">
                    <h3>???????????? ????????????????:</h3>
                    <div className="info_inner">
                        <div className="info_inner--first"><span>??????:</span><span>????????????:</span><span>??????:</span><span>??????????????:</span></div>
                        <div>
                            <div>Bagless Vacuum Cleaner</div> 
                            <div>40??28??24 ????</div>
                            <div>4.8</div>
                            <div>??????????????</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related_prods">
                <div>???????????? ??????????????????</div>
                <div className="related_prod--wrapper">
                    <Product/> <Product2/> <Product3/> <Product4/>
                </div>
            </div>
            {/* SP version  */}
            <div className="productDetail_wrapper">
                <div className='productDetail_info'>
                    <div className='left'>
                        <div className='productDetail_info--brand'><img src={Brand} alt="lazy" /></div>
                        <div className='productDetail_info--desc'>???????? ????????????</div>
                        <div className='productDetail_info--price'>
                            <span>319,900???</span>
                            <span>639,800???</span>
                        </div>
                    </div>
                    <div className='right'>
                        -50%
                    </div>
                </div>
                <div className="center_sp">
                    <div className="color">
                        <p>????????: <span>??????????</span></p>
                        <div id="colors">
                            <label class="colors-container">  <span className="rd"></span>
                            <input type="radio" checked="checked" name="radio"/>
                            <span class="checkmark"></span>
                            </label>
                            <label class="colors-container2">  <span className="rd"></span>
                            <input type="radio" name="radio"/>
                            <span class="checkmark"></span>
                            </label>
                            <label class="colors-container3"> <span className="rd"></span>
                            <input type="radio" name="radio"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="quantity">
                        <div>?????????????????? ????????????</div>
                        <div>
                            <label for='number-dd'><b>??????:</b></label>
                            <select id='number-dd' name='number'>
                                <option value=''></option>
                                <option value='one'>1</option>
                                <option value='two'>2</option>
                                <option value='three'>3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="store_p--sp">
                    <img className="store_p--sp--img" src={Store_sp} alt='lazy'/>
                </div>
                <div className='productDetail_payment'>
                    <div className='top'>
                        <Link to='/product/purchase'>
                            <button className="btn_purchase">???????????????? ????????</button>
                        </Link>
                        <button className="btn_basket">?????????????? ??????????</button>
                    </div>
                    <div className='mid'>
                    <picture><img src=""alt="" /></picture>
                    </div>
                    <div className='prod_btm'>
                        <h3>???????????? ????????????????:</h3>
                        <div>Bagless Vacuum Cleaner</div>
                        <div>????????????: 40??28??24 ????</div>
                        <div>??????: 4.8 </div>
                        <div>??????????????</div>
                    </div>
                    <div className="related">
                        <h5>???????????? ??????????????????</h5>
                        <div className="productDetail_payment--prods"><Product/><Product2/></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductDetail;
