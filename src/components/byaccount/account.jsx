import React from 'react'
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import './account.css';
import Qr from "../../assets/qr-code.svg";
 
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal_account--pc'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Төлбөр төлөх заавар
          </Modal.Title>
        </Modal.Header>
        <div className='order--pc'>
            Захиалгын дүн
        </div>
        <div className='price_modal--pc'>1,229,900₮</div>
        <div className='payment_sel--pc'>
            Төлбөрийн нөхцөл
        </div>
        <div className='account_sel--pc'>
            Дансаар шилжүүлэх
        </div>
        <Modal.Body>
            <div className='account_modal--wrapper'>
                <div className='nt1'>
                    <div>Хүлээн авагч:</div>
                    <div>Хаан банк:</div>
                    <div>Голомт банк:</div>
                    <div>Гүйлгээний утга:</div>
                </div>
                <div className='nt2'>
                    <div>ABMALL</div>
                    <div>5111 534 758</div>
                    <div>202 5100 445</div>
                    <div>125873862</div>
                </div>
            </div>
            <div className='payment_sel--pc qr--pc'>
             эсвэл QR код уншуулах
            </div>
            <div className='qr--img'>
                <img src={Qr} alt="" />
            </div>
            <div className='inst--pc'>
                Таны захиалга төлбөр төлөгдсөний дараа баталгаажих болно! Та аль ч банкны салбар болон интернет банкны апликэйшн ашиглан төлбөрөө төлөх боломжтой.
            </div>
            <div className='phone--pc'>
                Лавлах утас: <span>79997000</span> 
            </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
 
const Account = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Button variant="primary" className='btn_modal--pc' onClick={() => setModalShow(true)}>
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
  )
}

export default Account;