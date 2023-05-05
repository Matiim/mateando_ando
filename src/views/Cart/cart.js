import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../../components/Item/item";
import { Layout } from "../../components/Layout/Layout";
import { TrashWidget } from "../../components/trashwidget/trashWidget";
import { CartContext } from "../../Context/cartContext";
import "./style.css"

  
const CartView = () => {
	const navigate = useNavigate();

	const { productsAdded, totalAmount } = useContext(CartContext);



	const goToCheckout = () => {
		navigate("/checkout");
	  };
  
	return (
	  <Layout>
		<div className="cart">
		  {productsAdded.length === 0 ? (
			<div className="cart-vacio">
			  
			  <h1 className="h1-vacio">No has agregado productos en el carro</h1>
			  <button onClick={() => navigate("/")} className="ir-inicio">
				Ir al inicio
			  </button>
			</div>
			
		  ) : (
			<div>
			  <div className="div3">
				{productsAdded.map((product) => {
				  const quantityAdded = product.quantityAdded;
				  	
				  return (
					<div>
						<div className="description">
						<img src={product.item.img}  id="img-cart" />
							<p id="Cantidad">CANTIDAD :</p>
         					<p className=" carroDescripcion"> { quantityAdded } </p>
							 <p id="Producto">PRODUCTO :</p>
          					<p className="carroDescripcion"> { product.item.name } </p>
							  <p id="Precio">PRECIO :</p>
          					<p className="carroDescripcion"> <strong >${ product.item.price }</strong> </p> 
          				<TrashWidget itemId={product.item.id} />
       					</div> 
					</div>
				  );
				})}
			  </div>
			  <div className="finalizar">
				  <div className="finalizar-compra">
						<span className="total">Total a pagar: ${totalAmount}</span>
						<button onClick={goToCheckout} className="checkout">Comprar</button>
				  </div>
			  </div>
			</div>
		  )}
		</div>
	  </Layout>
	);
  };
  
  export default CartView;


  