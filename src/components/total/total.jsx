import './total.css';
import Img1 from '../../assets/dust_clean_sm.png'
import Img2 from '../../assets/wash_m_sm.png'

const Total = () => {
  return (
    <div className='total'>
        <div className='total_xl--right'>
            <div className='total_xl--right--top'>
                <div><span>Нийт дүн:</span>    <span>319,900₮</span></div>  
                <div><span>Нийт хөнгөлөлт:</span>  <span>-319,900₮</span></div>
                </div>
            <div className='total_xl--right--mid'>
                <div>
                    <span><img src={Img1} alt="lazy" /></span>
                    <span>
                        <h3>Тоос сорогч</h3>
                        <p>Bagless Vacuum Cleaner</p>
                        <p>Хэмжээ: 40х28х24 см</p>
                        <p>Жин: 4.8</p>
                        <p>Утастай</p>
                    </span>
                    <span>
                        x <span>1</span>
                    </span>
                    <div>319,900₮</div>
                    <div>639,800₮</div>
                </div>
                <div className='snd'>
                    <span><img src={Img2} alt="lazy" /></span>
                    <span>
                        <h3>Угаалгын машин</h3>
                        <p>Бүрэн автомат, EcoBubble технологи 15 төрлийн угаах программтай</p>
                        <p>Угаах жин: 7кг</p>
                    </span>
                    <span>
                        x <span>1</span>
                    </span>
                    <div>1,899,900₮</div>
                    <div>639,800₮</div>
                </div>
            </div>
            <div className='total_xl--right--btns'>
                <button className='btn-total'>ҮРГЭЛЖЛҮҮЛЭХ</button>
            </div>
        </div>
    </div>
  )
}

export default Total