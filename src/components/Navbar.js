import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';





function NavBar() {
  return (
 	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mateando Ando</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 ">
		  	<Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#mates">Mates</Nav.Link>
            <Nav.Link href="#termos">Termos</Nav.Link>
			<Nav.Link href="#bombillas">Bombillas</Nav.Link>
			<Nav.Link href="#set-materos">Set-materos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
		<CartWidget/>
      </Container>
	</Navbar>
	 

  );
}

export default NavBar;