import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Prevención de Fraudes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Mí</Nav.Link>
            <Nav.Link as={Link} to="/common-scams">Estafas Comunes</Nav.Link>
            <Nav.Link as={Link} to="/prevention">Prevención</Nav.Link>
            <Nav.Link as={Link} to="/report">Denuncias</Nav.Link>
            <Nav.Link as={Link} to="/resources">Recursos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;