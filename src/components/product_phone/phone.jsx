import './phone.css'
import Img from '../../assets/galaxy_s22_sm.webp'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Phone = () => {
  return (
    <Link to="/product/detail"> 
      <section className='phone'>
        <section><img className='img' src={Img} alt="" /></section>
        <section><img className='brand' src={Brand} alt="lazy" /></section>
        <section className='detail'>Samsung Galaxy S22</section>
        <section className='price'>2,225,000₮</section>
      </section>
    </Link>
 
  )
}

export default Phone;