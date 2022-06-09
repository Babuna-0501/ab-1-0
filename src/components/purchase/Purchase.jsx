import './purchase.css'
import { Tabs } from "@yazanaabed/react-tabs";
import { Form, Button } from 'react-bootstrap'
import Total from '../total/total';

const Purchase = () => {
  return (
    <div className='purchase'>
        <Tabs className='tabOne'
            activeTab={{
                id: "tab1"
            }}
            >
            <Tabs.Tab id="tab1" title="Хувь хүн" className='tab1' >
                <div className='tab1_wrapper'>
                    <Form className='form_xl'>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label className='lbl_txt' style={{color:"#909090"}}>Нэр</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label className='lbl_txt' style={{color:"#909090"}}>Овог</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='lbl_txt' style={{color:"#909090"}}>И-мэйл</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label className='lbl_txt' style={{color:"#909090"}}>Утасны дугаар</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='lbl_txt' style={{color:"#909090"}}>Нууц үг</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label className='lbl_txt' style={{color:"#909090"}}>Дэлгэрэнгүй хаяг</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        {/* <div className="form_idx">
                            <Button className="btn_form" variant="primary" type="submit">
                                Нэвтрэх
                            </Button>
                            <Button className="btn_form" variant="primary" type="submit">
                                facebook-ээр нэвтрэх
                            </Button>
                        </div> */}
                    </Form>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Албан байгууллага">
                <div className='tab2_wrapper'>
                    <Form className='form_xl'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:"#909090"}}>Байгууллагын нэр</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:"#909090"}}>Байгууллагын регистр</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:"#909090"}}>И-мэйл</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:"#909090"}}>Утасны дугаар</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color:"#909090"}}>Дэлгэрэнгүй хаяг</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 form_lg-fx" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Сануулах" />
                            <Form.Text className="text-muted">
                            Нууц үгээ мартсан.
                            </Form.Text>
                        </Form.Group>
                        {/* <div className="form_idx">
                            <Button className="btn_form" variant="primary" type="submit">
                                Нэвтрэх
                            </Button>
                            <Button className="btn_form" variant="primary" type="submit">
                                facebook-ээр нэвтрэх
                            </Button>
                        </div> */}
                    </Form>
                </div>
            </Tabs.Tab>
        </Tabs>

        <Total/>
    </div>
  )
}

export default Purchase