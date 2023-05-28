import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from "react-bootstrap/Col";

export const MyNavbar = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Navbar bg="dark" variant="dark">
        <Col>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Col>
        <Col>
          <Nav className="me-auto">
            <Nav.Link href="/lookup">Lookup</Nav.Link>
            <Nav.Link href="/battle">Battle</Nav.Link>
            <Nav.Link href="/quests">Quests</Nav.Link>
            <Nav.Link href="/maps">Maps</Nav.Link>
            <Nav.Link href="/data/bank">DataBank</Nav.Link>
            <Nav.Link href="/world/building">WorldBuilding</Nav.Link>
            <Nav.Link href="/bestiary">Monsters</Nav.Link>
            <Nav.Link href="/character">Characters</Nav.Link>
            <Nav.Link href="/inventory">Inventory</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/rules">Rules</Nav.Link>
            <Nav.Link href="/journals">Journal</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Navbar.Brand href="/login">Account</Navbar.Brand>
        </Col>
      </Navbar>
    </div>
  );
}
