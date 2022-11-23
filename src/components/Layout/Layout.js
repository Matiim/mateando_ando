import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar/Navbar"
import "./style.css"

export const Layout = ({ children }) => {
  return (
    <main>
      <NavBar/>
      {children}
    </main>
	
  );
};