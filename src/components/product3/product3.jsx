import './product3.css'
import Img from '../../assets/dust_clean_sm.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Product3= () => {
  return (
    <Link to="/product/detail"> 
      <div className='product3'>
        <div className='discount'>50% хямдарсан</div>
        <div><img className='img' src={Img} alt="" /></div>
        <div><img className='brand' src={Brand} alt="lazy" /></div>
        <div className='detail'>Тоос сорогч</div>
        <div className='price'>319,900₮ <span className='old_price'>639,800₮</span> </div>
      </div>
    </Link>
 
  )
}

export default Product3;