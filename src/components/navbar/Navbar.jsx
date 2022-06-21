import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/ABMALL.svg'
import Basket from '../../assets/basket.svg'
import Search1 from '../../assets/search.svg'
import Menu from '../menu/menu'
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Find from '../find/find';
import Empty from '../../assets/empty.png'
import Contact from '../../assets/contact.svg'
import Compare from '../../assets/compare_icon.svg'

// function* getStockValue() {
//   var entry1 = yield request('http://myrl.com/stock/key');
//   var data1  = JSON.parse(entry1);
//   var entry2 = yield request('http://myurl/stock/value');
//   var data2  = JSON.parse(entry2);
// }
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='nav_pc--search' id="contained-modal-title-vcenter">
          Та юу хайж байна?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Find/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img className='main_empty' src={Empty} alt="lazy" />
      </Modal.Header>
      <Modal.Body className='main_body'>
      Таны сагс хоосон байна
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Link to='/basket'>
          <button onClick={props.onHide} className='main_btn'>Авах</button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}


const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  return (
    <div className='navbar-ab'>
        <div className='left'><Link to="/"><img className='logo' src={Logo} /> </Link>
          <div className='left_search--xl'>
            <form class="search-container">
              <input type="text" id="search-bar" placeholder="Та юу хайж байна?"/>
              <a href="#">
                <img class="search-icon" src={Search1}/>
              </a>
            </form>
          </div>
        </div>
        <div className='right'>
            <div className='search_sm'>
                <Link to="/search">
                  <img src={Search1} alt="" />
                </Link>
            </div>
            {/* <div className='search_xl'>
              <>
                <img className='search_img--xl' src={Search1} alt="" onClick={() => setModalShow(true)}/>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </>
            </div> */}
            <div className='basket_sm'>
              <Link to="/basket">
                <img src={Basket} alt="" />
              </Link>
            </div>
            <div className='basket_xl'>
              <div className='phone_wrapper'>+976 79997000</div>
              <div><img src={Compare} alt="lazy" /></div>
                <>
                <img className='basket_img--xl' src={Basket} alt="" onClick={() => setModalShow2(true)}/>
                <MyVerticallyCenteredModal2
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                />
              </>
              <div className='contact_wrapper'><img className='contact_wrapper--img' src={Contact} alt="" /></div>
            </div>
            <div className='menu_sp'>
              <Menu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;