import { useState }from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleClick() {
      history.push("/product/step3");
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className='payment_off off'>Төлбөр төлөх заавар</div>
          <div className='off result_off'>Захиалгын дүн</div>
          <div className='off price_off'>1,229,900₮</div>
          <div className='off result_off'>Төлбөрийн нөхцөл</div>
          <div className='off result_off'>Дансаар шилжүүлэх</div>
          <div className='off_screen--invoice'>
              <div className='invoice1'>
                <div>Хүлээн авагч:</div>
                <div>Хаан банк:</div>
                <div>Голомт банк:</div>
                <div>Гүйлгээний утга:</div>
              </div>
              <div className='invoice2'>
                <div>ABMALL</div>
                <div>5111 534 758</div>
                <div>202 5100 445</div>
                <div>125873862</div>
              </div>
          </div>
          <div className='inquiry'>Таны захиалга төлбөр төлөгдсөний дараа баталгаажих болно! Та аль ч банкны салбар болон интернет банкны апликэйшн ашиглан төлбөрөө төлөх боломжтой.
          </div>
          <div className='contact'>Лавлах утас: <span>79997000</span> </div>
          </Offcanvas.Body>
          <div className="btm_view-off">
            <div onClick={handleClick}>ИНТЕРНЕТ БАНКААР ТӨЛӨХ</div>
          </div>
        </Offcanvas>
      </>
    );
  }
  
  function ByAccount() {
    return (
      <>
        {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }


  export default ByAccount;