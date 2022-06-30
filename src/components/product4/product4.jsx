import './product4.css'
import Img from '../../assets/roaster.png'
import Brand from '../../assets/bosch.svg'
import { Link } from 'react-router-dom';

const Product4 = () => {
  return (
    <Link to="/product/detail"> 
      <section className='product4'>
        <section><img className='img' src={Img} alt="" /></section>
        <section><img className='brand' src={Brand} alt="lazy" /></section>
        <section className='detail'>Талх шарагч</section>
        <section className='price'>225,000₮</section>
      </section>
    </Link>
 
  )
}

export default Product4;