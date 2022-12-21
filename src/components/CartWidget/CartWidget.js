import "./style.css";
import { BsCart2 } from 'react-icons/bs';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

const CartWidget = () => {
	const { productsAdded } = useContext(CartContext);
	const count = productsAdded.length;


	return(
		<div >
		 <Link to="/cart" className="relative">
		 <button className="CartWidget" type="button">
			<BsCart2/>
		</button>
		   {count > 0 && (
			 <span className="span">
			   {count}
			 </span>
		   )}
		 </Link>
	   </div>
	)
}

export default CartWidget;

