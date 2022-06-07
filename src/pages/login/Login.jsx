import "./login.css"
import { Form, Button } from 'react-bootstrap'


const Login = () => {
  return (
    <div className='login'>
        <h4>Нэвтрэх / Бүртгүүлэх</h4>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color:"#909090"}}>И-мэйл эсвэл утас</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color:"#909090"}}>Нууц үг</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3 form_lg-fx" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Сануулах" />
                <Form.Text className="text-muted">
                Нууц үгээ мартсан.
                </Form.Text>
            </Form.Group>
            <div className="form_idx">
                <Button className="btn_form" type="submit">
                    Нэвтрэх
                </Button>
                <Button className="btn_form" type="submit">
                    facebook-ээр нэвтрэх
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default Login
