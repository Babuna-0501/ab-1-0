import './product.css'
import Img from '../../assets/wash-machine.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to="/product/detail"> 
      <section className='product'>
        <section className='new'>Шинээр ирсэн</section>
        <section><img className='img' src={Img} alt="" /></section>
        <section><img className='brand' src={Brand} alt="lazy" /></section>
        <section className='detail'>Ultra HD 4K TV 50”</section>
        <section className='price'>2,129,900₮</section>
      </section>
    </Link>
 
  )
}

export default Product;