import './product2.css'
import Img from '../../assets/wash_m_sm.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Product2 = () => {
  return (
    <Link to="/product/detail"> 
      <section className='product2'>
        <section><img className='img' src={Img} alt="" /></section>
        <section><img className='brand' src={Brand} alt="lazy" /></section>
        <section className='detail'>Угаалгын машин</section>
        <section className='price'>1,899,900₮</section>
      </section>
    </Link>
 
  )
}

export default Product2;