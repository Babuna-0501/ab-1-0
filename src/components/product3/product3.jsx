import './product3.css'
import Img from '../../assets/dust_clean_sm.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Product3= () => {
  return (
    <Link to="/product/detail"> 
      <section className='product3'>
        <section className='discount'>50% хямдарсан</section>
        <section><img className='img' src={Img} alt="" /></section>
        <section><img className='brand' src={Brand} alt="lazy" /></section>
        <section className='detail'>Тоос сорогч</section>
        <section className='price'>319,900₮ <span className='old_price'>639,800₮</span> </section>
      </section>
    </Link>
 
  )
}

export default Product3;