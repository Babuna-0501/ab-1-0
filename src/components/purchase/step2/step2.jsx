import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
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

const Step2 = () => {
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
        {/* <form onSubmit={handleSubmit}>
            <Form.Group controlId="kindOfStand">
            <div className="lbl-wrapper">     
            <img className="step2-icon" src={wallet} alt="" /> 
            <p>Дансаар шилжүүлэх </p> 
                <Form.Check
                value="Дансаар шилжүүлэх"
                type="radio"
                aria-label="radio 1"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Дансаар шилжүүлэх"}
                >
                    <ByAccount/>
                </Form.Check>
            </div>
            <div className="lbl-wrapper">     
            <img className="step2-icon" src={HHbank} alt="" /> 
            <p>Худалдаа хөгжлийн банк</p> 
                <Form.Check
                value="ХХБ"
                type="radio"
                aria-label="radio 2"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "ХХБ"}
                />
            </div>
            <div className="lbl-wrapper">     
            <img className="step2-icon" src={Mm} alt="" /> 
            <p>Most Money</p> 
                <Form.Check
                value="Most"
                type="radio"
                aria-label="radio 3"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Most"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={Store} alt="" /> 
                <p>Store Pay</p> 
                <Form.Check
                value="Store"
                type="radio"
                aria-label="radio 4"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Store"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={wallet} alt="" /> 
                <p>Simple.mn</p> 
                <Form.Check
                value="Simple"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Simple"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={wallet} alt="" /> 
                <p>Social Pay</p> 
                <Form.Check
                value="SP"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "SP"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={Xaan} alt="" /> 
                <p>Хаан Банк</p> 
                <Form.Check
                value="khaan"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "khaan"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={Statebank} alt="" /> 
                <p>Төрийн Банк</p> 
                <Form.Check
                value="Tur"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Tur"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={Ub} alt="" /> 
                <p>Улаанбаатар Хотын Банк</p> 
                <Form.Check
                value="UB"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "UB"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={wallet} alt="" /> 
                <p>Meme</p> 
                <Form.Check
                value="Meme"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Meme"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={wallet} alt="" /> 
                <p>Pocket</p> 
                <Form.Check
                value="Pocket"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Pocket"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={wallet} alt="" /> 
                <p>Mongol Chat</p> 
                <Form.Check
                value="Mongol Chat"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Mongol Chat"}
                />
            </div>
            <div className="lbl-wrapper">     
                <img className="step2-icon" src={Xacbank} alt="" style={{borderRadius:"5px"}} /> 
                <p>Xac Банк</p> 
                <Form.Check
                value="Xac Банк"
                type="radio"
                aria-label="radio 5"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Xac Банк"}
                />
            </div>
            </Form.Group>
            <Button className="btn" variant="primary" type="submit">
            Үргэлжлүүлэх
            </Button>
        </form> */}
        <Form>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
            <div className="lbl-wrapper">
                <Form.Check
                label="Дансаар шилжүүлэх"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Худалдаа хөгжлийн банк"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Most Money"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Store Pay"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Most Money"
                name="group1"
                type={type}
                id={`inline-${type}-5`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Simple.mn"
                name="group1"
                type={type}
                id={`inline-${type}-6`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Social Pay"
                name="group1"
                type={type}
                id={`inline-${type}-7`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Хаан Банк"
                name="group1"
                type={type}
                id={`inline-${type}-8`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Төрийн Банк"
                name="group1"
                type={type}
                id={`inline-${type}-9`}
                />
            </div>
            <div className="lbl-wrapper">
                <Form.Check
                label="Улаанбаатар Хотын Банк"
                name="group1"
                type={type}
                id={`inline-${type}-10`}
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
  );
};

export default Step2;
