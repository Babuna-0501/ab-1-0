import './watch.css'
import Img from '../../assets/watch_sm.webp'
import Brand from '../../assets/Samsung-Symbol.svg'
import { Link } from 'react-router-dom';

const Watch = () => {
  return (
    <Link to="/product/detail"> 
      <section className='watch'>
        <section><img className='img' src={Img} alt="" /></section>
        <section><img className='brand' src={Brand} alt="lazy" /></section>
        <section className='detail'>Galaxy Watch 4</section>
        <section className='price'>1,515,000₮</section>
      </section>
    </Link>
 
  )
}

export default Watch;