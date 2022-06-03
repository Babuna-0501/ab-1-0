import './product2.css'
import Img from '../../assets/wash_m_sm.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Product2 = () => {
  return (
    <Link to="/product/detail"> 
      <div className='product2'>
        <div><img className='img' src={Img} alt="" /></div>
        <div><img className='brand' src={Brand} alt="lazy" /></div>
        <div className='detail'>Угаалгын машин</div>
        <div className='price'>1,899,900₮</div>
      </div>
    </Link>
 
  )
}

export default Product2;