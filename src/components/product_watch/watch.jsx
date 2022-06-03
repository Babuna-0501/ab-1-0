import './watch.css'
import Img from '../../assets/watch_sm.webp'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Watch = () => {
  return (
    <Link to="/product/detail"> 
      <div className='watch'>
        <div><img className='img' src={Img} alt="" /></div>
        <div><img className='brand' src={Brand} alt="lazy" /></div>
        <div className='detail'>Galaxy Watch 4</div>
        <div className='price'>1,515,000₮</div>
      </div>
    </Link>
 
  )
}

export default Watch;