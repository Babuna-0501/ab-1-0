import './orders.css';
import Img1 from "../../assets/dust_clean_sm.png"
import Img2 from "../../assets/wash_m_sm.png"
import Brand from "../../assets/Samsung-Symbol.svg"
import Progress from '../progress_step/progress';
import Footer from '../footer/footer';

const Orders = () => {
  return (
    <div className='orders'>
        <div>
            <h3 className='orders_title--sp'>Захиалгын дугаар: <span>А332523895</span> </h3>
            <h3 className='orders_title--pc'>Миний захиалгууд</h3>
        </div>
        <div className='order_and_payment'>
            <div className='orders_wrapper'>
                <div className='top'>
                    <img className='image_big' src={Img1} alt="" />
                    <div className='top_wrapper'>
                        <div className='detail'>
                            <div>Тоос сорогч</div>
                            <div>Bagless Vacuum Cleaner</div>
                            <div>Хэмжээ: <span>40х28х24 см</span> </div>
                            <div>Жин: <span>4.8</span></div>
                            <div>Утастай</div>
                        </div>
                        <div className='brand_orders'><img src={Brand} alt="lazy" /></div>
                        <div className='quant'>x<span>1</span></div>
                    </div>
                    <div className='price_orders'>
                        <div className='new_orders'>319,900₮</div>
                        <div className='old_orders'>639,800₮</div>
                    </div>
                </div>
                <div className='bottom'>
                    <img className='image_big' src={Img2} alt="" />
                    <div className='bottom_wrapper'>
                        <div className='detail'>
                            <div>Угаалгын машин</div> 
                            <div>Бүрэн автомат, EcoBubble</div>
                            <div>технологи 15 төрлийн угаах программтай</div>
                            <div>Угаах жин:<span> 7кг</span></div>
                        </div>
                        <div className='brand_orders'><img src={Brand} alt="lazy" /></div>
                        <div className='quant'>x<span>1</span></div>
                    </div>
                    <div className='price_orders'>
                        <div className='new_orders2'>1,899,900₮</div>
                    </div>
                </div>
            </div>
            <div className='payment_field'>
                <div className='total_xl--right--top'>
                    <div><span>Нийт дүн:</span>    <span className='total_price--xl'>319,900₮</span></div>  
                    <div><span>Нийт хөнгөлөлт:</span>  <span className='total_price--lg'>-319,900₮</span></div>
                </div>
                <div className='payment_text'>Таны захиалга төлж баталгаажсанаас хойш 24-48 цагийн дотор хүргэгдэх тул анхаарна уу!</div>
                <button>Төлбөр төлөгдсөн</button>
                <div className='progress_order_bar--pc'>
                    <Progress/>
                </div>
                <div className='orders_number'>Захиалгын дугаар: <span>А332523895</span></div>
            </div>
        </div>
     
        <div className='orders_bottom'>
            <div className='orders_bottom--top'>
                <button>Төлбөр төлөгдсөн</button>
                <div>Нийт: <span>2,220,000₮</span></div>
            </div>
            <div>
                <Progress/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Orders