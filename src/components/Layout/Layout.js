import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar/Navbar";
import Footer from '../Footer/footer';

import "./style.css"

export const Layout = ({ children }) => {
  return (
    <main>
		
      	<NavBar/>
		  <section>{children}</section>
		  <Footer/>
	</main>
	
  );
};