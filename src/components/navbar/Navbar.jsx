import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/ABMALL.svg'
import Basket from '../../assets/basket.svg'
import Search from '../../assets/search.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'><Link to="/"><img className='logo' src={Logo} /> </Link></div>
        <div className='right'>
            <div>
                <Link to="/search">
                  <img src={Search} alt="" />
                </Link>
            </div>
            <div>
              <Link to="/basket">
                <img src={Basket} alt="" />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;