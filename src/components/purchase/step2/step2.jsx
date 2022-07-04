import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Offcanvas } from "react-bootstrap";
import './step2.css';
import wallet from '../../../assets/payment-method.png'
import Statebank from '../../../assets/logos/state_bank.png'
import Xacbank from '../../../assets/logos/Xac_bank.jpeg'
import HHbank from '../../../assets/logos/ HHB.jpeg'
import Mm from '../../../assets/logos/mm.jpeg'
import Ub from '../../../assets/logos/ub_bank.png'
import Xaan from '../../../assets/logos/xaanbank.png'
import Store from '../../../assets/logos/store_pay.jpeg'
import ByAccount from "../../storepay/Storepay";
import Most from "../../../assets/most.png";
import Simple from "../../../assets/simple.jpeg";
import Social from "../../../assets/social.png";
import Total from "../../total/total";
import Footer from "../../footer/footer";
import Account from "../../byaccount/account";
import Qr from "../../../assets/qr-code.svg";
import By from "../../../assets/by_acc.png"

const Step2 = () => {

    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <div className="step2_modal_pop--sp">
            <Button variant="primary" onClick={handleShow} className="me-2 off_dans" >
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header className="off_step2_header--sp">
                <Offcanvas.Title> Төлбөр төлөх заавар</Offcanvas.Title>
                <div className='order--sp'>
                    Захиалгын дүн
                </div>
                <div className='price_modal--sp'>1,229,900₮</div>
                <div className='payment_sel--sp'>
                    Төлбөрийн нөхцөл
                </div>
                <div className='account_sel--sp'>
                    Дансаар шилжүүлэх
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body className="body_step2--sp">
                <div className='step2_sp_modal--wrapper'>
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
                <div className='inst--sp'>
                    Таны захиалга төлбөр төлөгдсөний дараа баталгаажих болно! Та аль ч банкны салбар болон интернет банкны апликэйшн ашиглан төлбөрөө төлөх боломжтой.
                </div>
                <div className='phone--sp'>
                    Лавлах утас: <span>79997000</span> 
                </div>
              </Offcanvas.Body>
                <div className="pay_btm--sp">
                    <Link to='/product/step3'>ИНТЕРНЕТ БАНКААР ТӨЛӨХ</Link>
                </div>
            </Offcanvas>
          </div>
        );
      }
//   const [item, setItem] = useState({ kindOfStand: "", another: "another" });

//   const { kindOfStand } = item;
//   const handleChange = e => {
//     e.persist();
//     console.log(e.target.value);

//     setItem(prevState => ({
//       ...prevState,
//       kindOfStand: e.target.value
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert(`${kindOfStand}`);
//   };


  return (
    <div className="step2">
        <div className="step2_wrapper">
        <Form>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
            <div className="lbl-wrapper">
                    {['bottom'].map((placement, idx) => (
                        <>
                        <img src={By} alt="lazy" />
                        <Form.Check
                        label="Дансаар шилжүүлэх"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        />
                        <OffCanvasExample key={idx} placement={placement} name={placement}/>
                        </>
                
                    ))}
            </div>
            <div className="lbl-wrapper">
                <img src={HHbank} alt="" />
                <Form.Check
                label="Худалдаа хөгжлийн банк"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Most} alt="" />
                <Form.Check
                label="Most Money"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Store} alt="lazy" />
                <Form.Check
                label="Store Pay"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Simple} alt="" />
                <Form.Check
                label="Simple.mn"
                name="group1"
                type={type}
                id={`inline-${type}-5`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Social} alt="" />
                <Form.Check
                label="Social Pay"
                name="group1"
                type={type}
                id={`inline-${type}-6`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Xaan} alt="" />
                <Form.Check
                label="Хаан Банк"
                name="group1"
                type={type}
                id={`inline-${type}-7`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Statebank} alt="" />
                <Form.Check
                label="Төрийн Банк"
                name="group1"
                type={type}
                id={`inline-${type}-8`}
                />
            </div>
            <div className="lbl-wrapper">
                <img src={Ub} alt="" />
                <Form.Check
                label="Улаанбаатар Хотын Банк"
                name="group1"
                type={type}
                id={`inline-${type}-9`}
                />
            </div>
        </div>
         ))}
        </Form>
        <div className="btm_view">
            <div>Төлөх дүн</div>
          
            <div>1,229,900₮</div>
        </div>
        </div>
    



        {/* PC here */}
        <div className="step2_wrapper--pc">
            <div className="inner_wrapper--pc">
                <h3>Төлбөрийн нөхцөл</h3>
                <div className="payment_selection--pc">
                    <div className="popup--pc">
                        <Account/>
                    </div>
                    <span>
                        <div>
                            <img src={wallet} alt="lazy" />
                            <div>Данс эсвэл QR код</div>
                        </div>
                        <div className="payment_title--pc">Дансаар шилжүүлэх</div>
                        <div>Төлбөрийг дансанд шилжүүлэх, Интернет банк, Мобайл банк, QR код, дансаар төлбөр төлөх.</div>
                    </span>
                    <span>
                        <div>
                            <img src={HHbank} alt="lazy" />
                            <div>Картаар</div>
                        </div>
                        <div className="payment_title--pc">Худалдаа хөгжлийн банк</div>
                        <div>ХААН банкны картнаас бусад бүх төрлийн дэбит, кредит, гадаадын, дотоодын картаар төлбөр төлөх.</div>
                    </span>
                    <span>
                        <div>
                            <img src={Most} alt="lazy" />
                            <div>Цахим хэтэвч</div>
                        </div>
                        <div className="payment_title--pc">Most Money</div>
                        <div>Most money үйлчилгээний хэрэглэгчид утасны дугаар, ТАН кодоо оруулан төлбөрөө төлнө үү.</div>
                    </span>
                    <span>
                        <div>
                            <img src={Store} alt="" />
                            <div>Хуваан төлөх үйлчилгээ</div> 
                        </div>
                        <div className="payment_title--pc">Storepay</div>
                        <div>Storepay үйлчилгээг ашиглан ямар ч хүү, шимтгэлгүй хуваан төлөх нөхцөлөөр төлөх боломжтой</div>
                    </span>
                    <span>
                        <div>
                            <img src={Simple} alt="lazy" />
                            <div>Дижитал зээл</div>
                        </div>
                        <div className="payment_title--pc">Simple</div>
                        <div>Simple app  ашиглан төлбөрөө төлнө.</div>
                    </span>
                    <span>
                        <div>
                            <img src={Social} alt="lazy" />
                            <div>Цахим хэтэвч</div>
                        </div>
                        <div className="payment_title--pc">Socialpay</div>
                        <div>Голомт банкны Social Pay үйлчилгээг ашиглан төлбөр төлөх боломжтой.</div>
                    </span>
                </div>
            </div>
            <Total/>
        </div>
        <Footer/>
    </div>
  );
};

export default Step2;
