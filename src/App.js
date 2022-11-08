import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItenListContainer/ItenListContainer';



function App() {
  return (
	<div>
  	<NavBar>
	  <CartWidget/>
	  </NavBar>
	<ItemListContainer greenting />
	</div>
  );
}

export default App;

