import './product.css'
import Img from '../../assets/wash-machine.png'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to="/product/detail"> 
      <div className='product'>
        <div className='new'>Шинээр ирсэн</div>
        <div><img className='img' src={Img} alt="" /></div>
        <div><img className='brand' src={Brand} alt="lazy" /></div>
        <div className='detail'>Ultra HD 4K TV 50”</div>
        <div className='price'>2,129,900₮</div>
      </div>
    </Link>
 
  )
}

export default Product;