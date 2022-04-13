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
import Simple from '../../assets/simple_s.png'
import './productDetail.css'



function ProductDetail({id, brand, price, desc, category, image }) {
    // const dispatch = useDispatch();
    
    // const [newProduct] = useState(Math.random() < 0.5)
 
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
                    <button>Худалдан авах</button>
                    <button>Сагсанд нэмэх</button>
                </div>
                <div className='mid'>
                <picture><img src={Simple} alt="" /></picture>
                </div>
                <div className='btm'>
                    <h3>Үндсэн мэдээлэл:</h3>
                    <div>Bagless Vacuum Cleaner</div>
                    <div>Хэмжээ: 40х28х24 см</div>
                    <div>Жин: 4.8 </div>
                    <div>Утастай</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
