import './menu.css'
import { Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap"

const menu = () => {
  return (
    <div className='menu'>
        <>
  {[false ].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand}>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown
                title="Цахилгаан бараа"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/">Телевизор</NavDropdown.Item>
                <NavDropdown.Item href="/">Хөргөгч / хөлдөөгч</NavDropdown.Item>
                <NavDropdown.Item href="/">Плетка</NavDropdown.Item>
                <NavDropdown.Item href="/">Дуков</NavDropdown.Item>
                <NavDropdown.Item href="/">Хиншүү сорогч</NavDropdown.Item>
                <NavDropdown.Item href="/">Аяга таваг угаагч</NavDropdown.Item>
                <NavDropdown.Item href="/">Печь</NavDropdown.Item>
                <NavDropdown.Item href="/">Угаалгын машин</NavDropdown.Item>
                <NavDropdown.Item href="/">Тоос сорогч</NavDropdown.Item>
                <NavDropdown.Item href="/">Индүү</NavDropdown.Item>
                <span class="arrow"></span>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown
                title="Гар утас"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
           <NavDropdown.Item href="/">Телевизор</NavDropdown.Item>
                <NavDropdown.Item href="/">Хөргөгч / хөлдөөгч</NavDropdown.Item>
                <NavDropdown.Item href="/">Плетка</NavDropdown.Item>
                <NavDropdown.Item href="/">Дуков</NavDropdown.Item>
                <NavDropdown.Item href="/">Хиншүү сорогч</NavDropdown.Item>
                <NavDropdown.Item href="/">Аяга таваг угаагч</NavDropdown.Item>
                <NavDropdown.Item href="/">Печь</NavDropdown.Item>
                <NavDropdown.Item href="/">Угаалгын машин</NavDropdown.Item>
                <NavDropdown.Item href="/">Тоос сорогч</NavDropdown.Item>
                <NavDropdown.Item href="/">Индүү</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3 borderBottom">
              <NavDropdown
                title="Компьютер"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/">Телевизор</NavDropdown.Item>
                <NavDropdown.Item href="/">Хөргөгч / хөлдөөгч</NavDropdown.Item>
                <NavDropdown.Item href="/">Плетка</NavDropdown.Item>
                <NavDropdown.Item href="/">Дуков</NavDropdown.Item>
                <NavDropdown.Item href="/">Хиншүү сорогч</NavDropdown.Item>
                <NavDropdown.Item href="/">Аяга таваг угаагч</NavDropdown.Item>
                <NavDropdown.Item href="/">Печь</NavDropdown.Item>
                <NavDropdown.Item href="/">Угаалгын машин</NavDropdown.Item>
                <NavDropdown.Item href="/">Тоос сорогч</NavDropdown.Item>
                <NavDropdown.Item href="/">Индүү</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/basket">Сонирхсон бүтээгдэхүүн</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="login">Нэвтрэх / Бүртгүүлэх</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="about">Компанийн тухай</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="terms">Үйлчилгээний нөхцөл</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/baske">Холбоо барих
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Navbar>
  ))}
</>
    </div>
  )
}

export default menu