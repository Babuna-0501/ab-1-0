import './basket.css'
import Product from '../product/Product'
import Img1 from '../../assets/samsung_vc_xl.png'
import Img2 from '../../assets/wsh_xl.png'
import Inc from '../inc/inc'
import Samsung from '../../assets/Samsung-Symbol.svg'

const Basket = () => {
  return (
    <div className='basket'>
      <div className='basket_sm'>
        <div>
            <h3>Таны сагс хоосон байна</h3>
            <p>Төлбөр төлхөөсөө өмнө сагсандаа бараа хийнэ үү.</p>
        </div>
        <div>
            <h4>Сүүлд үзсэн бараа</h4>
            <Product/>
        </div>
      </div>
       <div className='basket_xl'>
          <div className='basket_xl--left'>
            <div className='basket_xl--left--prod'>
              <img className='prod_img' src={Img1} alt="lazy" />
              <div>
                <div className='title'>Тоос сорогч</div>
                <span className='dtl'>
                  <div>Bagless Vacuum Cleaner</div>
                  <div>Хэмжээ: 40х28х24 см</div>
                  <div>Жин: 4.8</div>
                  <div>Утастай</div>
                  <span><img src={Samsung} alt="" /></span>
                  <div><Inc/></div>
                </span>
              </div>
              <div>
                  <div className='c-price'>319,900₮</div>
                  <div className='o-price'>639,800₮</div>
                  <div className='delete'></div>
                </div>
              <div>

              </div>
            </div>
            <div className='basket_xl--left--prod'>
              <img className='prod_img2'  src={Img2} alt="lazy" /> 
              <div>
                <div className='title'>Угаалгын машин</div>
                <span className='dtl'>
                  <div className='dtl_info'>Бүрэн автомат, EcoBubble технологи 15 төрлийн угаах программтай</div>
                  <div>Угаах жин: 7кг</div>
                  <span><img src={Samsung} alt="" /></span>
                  <div><Inc/></div>
                </span>
                <span><img src="" alt="" /></span>
                <div></div>
              </div>
            </div>
          </div>
          <div className='basket_xl--right'>

          </div>
       </div>
    </div>
  )
}

export default Basket