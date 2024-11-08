import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary"> 
      <Logo />
      <Container>
        <BootstrapNavbar.Brand href="#home">Inicio</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Computadoras</Nav.Link>
            <NavDropdown title="Componentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Motherboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Memoria ram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fuentes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
        <CartWidget />
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
