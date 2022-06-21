import './leasing.css';
import { Form, Button } from 'react-bootstrap';

const Leasing = () => {
  return (
    <div className='leasing'>
        <div className='title'> 
            Лизингийн хүсэлт
        </div>
        <div className='form_xl'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Нэр:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Регистрийн дугаар:" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Оршин суугаа хаяг:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Бизнесийн хаяг:" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="И-мэйл хаяг:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label></Form.Label>
                    <Form.Control type="number" placeholder="Утасны дугаар:" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Өрхийн сарын орлого:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label></Form.Label>
                    <Form.Control type="number" placeholder="Зээлийн хэмжээ:" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Зээлийн хугацаа /сар/:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Зээлийн зориулалт:" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Барьцаа хөрөнгө:" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label></Form.Label>
                    <Form.Control className='last_input' type="text" placeholder="Нэмэлт мэдээлэл /Бизнесийн туршлага, бусад мэдээлэл/:" />
                </Form.Group>
            </Form>
            <div className='text_wrapper'>
                Та дараах мэдээллийг бидэнд илгээснээр манай мэргэжилтнүүд тантай эргэн холбогдох болно.
            </div>
            <Button className='btn_leasing' variant="primary" type="submit">
                Илгээх
            </Button>
        </div>
    </div>
  )
}

export default Leasing