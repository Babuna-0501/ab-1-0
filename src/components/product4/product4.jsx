import './product4.css'
import Img from '../../assets/roaster.png'
import Brand from '../../assets/bosch.svg'
import { Link } from 'react-router-dom';

const Product4 = () => {
  return (
    <Link to="/product/detail"> 
      <div className='product4'>
        <div><img className='img' src={Img} alt="" /></div>
        <div><img className='brand' src={Brand} alt="lazy" /></div>
        <div className='detail'>Талх шарагч</div>
        <div className='price'>225,000₮</div>
      </div>
    </Link>
 
  )
}

export default Product4;