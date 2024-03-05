import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { CartContext } from "../../Context/cartContext";
import {addDoc,collection,doc,getFirestore,updateDoc,} from "firebase/firestore";
import "./style.css"
import Swal from 'sweetalert2'




const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;
	const direc = event.target[3].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email, direc },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
			Swal.fire({
				icon: 'success',
				title: 'Compra Finalizada',
				text: 'Mateando Ando',
				showConfirmButton: false,
				timer:"2000",
			  })
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }

  }, [updatingProducts]);

  return (
    <Layout>
      <form onSubmit={handleFinalizePurchase} className="formulario">
        <div className="div1">
		<p>Nombre Completo*</p>
          <input
            className="nombre-completo"
            placeholder="Nombre Completo"
            required
          />
		  <p>Número de Teléfono</p>
          <input
            className="numero-teléfono"
            placeholder="Numero de Teléfono"
            type="number"
            required
          />
		  <p>Email*</p>
          <input
            className="email"
            placeholder="Email"
            type={"email"}
            required
          />
		    <p>Dirección*</p>
          <input
            className="dirección"
            placeholder="Dirección"
            required
          />
        </div>
        <span className="total-a-pagar">
          Total a pagar: <strong>${totalAmount}</strong>
        </span>
		<div className="botton">
			<button 
			variant="dark" 
			type="submit"
         	 className="botton-submit"
          	disabled={isLoading}
			onClick={() => navigate("/")}>Finalizar Compra</button>
		</div>
      </form>
    </Layout>
  );
};

export default CheckoutView;