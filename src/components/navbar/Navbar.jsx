import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/ABMALL.svg'
import Basket from '../../assets/basket.svg'
import Search from '../../assets/search.svg'
import Menu from '../menu/menu'


// function* getStockValue() {
//   var entry1 = yield request('http://myrl.com/stock/key');
//   var data1  = JSON.parse(entry1);
//   var entry2 = yield request('http://myurl/stock/value');
//   var data2  = JSON.parse(entry2);
// }

const Navbar = () => {
  return (
    <div className='navbar-ab'>
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
            <div>
              <Menu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;