import './phone.css'
import Img from '../../assets/galaxy_s22_sm.webp'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Phone = () => {
  return (
    <Link to="/product/detail"> 
      <div className='phone'>
        <div><img className='img' src={Img} alt="" /></div>
        <div><img className='brand' src={Brand} alt="lazy" /></div>
        <div className='detail'>Samsung Galaxy S22</div>
        <div className='price'>2,225,000₮</div>
      </div>
    </Link>
 
  )
}

export default Phone;