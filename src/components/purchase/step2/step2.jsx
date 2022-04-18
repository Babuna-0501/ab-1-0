import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './step2.css';
import wallet from '../../../assets/payment-method.png'

const Step2 = () => {
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setItem(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${kindOfStand}`);
  };

  return (
    <div className="step2">
        <form onSubmit={handleSubmit}>
            <Form.Group controlId="kindOfStand">
            <div className="lbl-wrapper">     
            <img className="step2-icon" src={wallet} alt="" /> 
            <p>Дансаар шилжүүлэх</p> 
                <Form.Check
                value="Дансаар шилжүүлэх"
                type="radio"
                aria-label="radio 1"
                label=""
                onChange={handleChange}
                checked={kindOfStand === "Дансаар шилжүүлэх"}
                />
            </div>
            <div className="lbl-wrapper">     
            <img className="step2-icon" src={wallet} alt="" /> 
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
            <img className="step2-icon" src={wallet} alt="" /> 
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
                <img className="step2-icon" src={wallet} alt="" /> 
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
                <img className="step2-icon" src={wallet} alt="" /> 
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
                <img className="step2-icon" src={wallet} alt="" /> 
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
                <img className="step2-icon" src={wallet} alt="" /> 
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
                <img className="step2-icon" src={wallet} alt="" /> 
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
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </form>
    </div>
  );
};

export default Step2;
