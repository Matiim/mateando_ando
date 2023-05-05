import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assests/img/logo/logo.png';
import {Link} from "react-router-dom";
import "./style.css"




function NavBar() {
  return (
	<div>
		<div id='text-top'>
			<p id='p-top'>¡ESTAS EN EL LUGAR CORRECTO!  SOMOS LA COMUNIDAD MATERA MÁS GRANDE DEL MUNDO. COMPRA SEGURA</p>
		</div>
		
		<div className="img ">
			<a href="/">
			<img
              alt="logo"
              src= {logo}
			  width="300"
			  height="300"
			 
              />
			  </a>
		 </div>
 	<Navbar collapseOnSelect expand="lg"  id="navbar" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav">
		  	<Link to="/" id='home'>HOME</Link>
            <Link to="/category/mate" id='mates'>MATES</Link>
            <Link  to="/category/termos" id='termos'>TERMOS</Link>
			<Link to="/category/bombillas" id='bombillas'>BOMBILLAS</Link>
			<Link to="/category/set" id='set'>SET-MATEROS</Link>
        </Nav>
        </Navbar.Collapse>
		<CartWidget/>
      </Container>
	</Navbar>
	</div>
  );
}


export default  NavBar; 