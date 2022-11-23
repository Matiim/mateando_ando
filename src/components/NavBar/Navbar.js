import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assests/img/logo/logo.png';
import "./style.css"




function NavBar() {
  return (
 	<Navbar collapseOnSelect expand="lg"  id="navbar" variant="dark">
      <Container>
	  <Navbar.Brand href="/" id='logo '>
	  <img
              alt="logo"
              src= {logo}
              width="130"
              height="130"
              className="justify-content flex-grow-1 "
		/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center flex-grow-1 " id="nav">
		  	<Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/category/mate">MATES</Nav.Link>
            <Nav.Link  href="/category/termos">TERMOS</Nav.Link>
			<Nav.Link href="/category/bombillas">BOMBILLAS</Nav.Link>
			<Nav.Link href="/category/set">SET-MATEROS</Nav.Link>
        </Nav>
        </Navbar.Collapse>
		<CartWidget/>
      </Container>
	</Navbar>
	 
  );
}


export default  NavBar; 