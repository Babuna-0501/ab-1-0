import './loan.css'
import { Form, Button } from 'react-bootstrap'

const loan = () => {
  return (
    <div className='loan'>
        <h4>Зээлээр авах</h4>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder='нэр'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder='овог'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRegister">
                <Form.Control type="text" placeholder='регистер'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control type="number" placeholder='Утасны дугаар'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder='И-мэйл'/>
            </Form.Group>
            <Form.Label style={{color:"#909090"}}>Гэрлэсэн эсэх</Form.Label>
            <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Тийм</option>
                <option value="2">Үгүй</option>
            </Form.Select>
            <Form.Label style={{color:"#909090"}} >Зээлтэй эсэх</Form.Label>
            <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Тийм</option>
                <option value="2">Үгүй</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicZeelTulbur">
                <Form.Control type="number" placeholder='Төлж байгаа зээлийн сарын төлбөр ₮'  data-parsley-length="[1,16]" maxlength="16"/>
            </Form.Group>
            <Form.Label style={{color:"#909090"}}>Орлогын төрөл</Form.Label>
            <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Цалин</option>
                <option value="2">Хувь бизнесс</option>
            </Form.Select>
            <Form.Label style={{color:"#909090"}}>Сарын орлогын хэмжээ</Form.Label>
            <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Цалин</option>
                <option value="2">Хувь бизнес</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicExp">
                <Form.Control type="text" placeholder='Тайлбар'/>
            </Form.Group>
        </Form>
        <button className='loan__btn'>Үргэлжлүүлэх</button>
    </div>
  )
}

export default loan