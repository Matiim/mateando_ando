import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/cartContext";

import "./style.css";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div>
      <div id="body">
        <div id="imagenes">
          <img src={item.img} />
        </div>
        <div id="detail">
          <h2 id="nombre">{item.name}</h2>
          <p id="descripcion">{item.description}</p>
          <span id="span-price">
            <strong id="precio">${item.price}</strong>
          </span>
          {currentStock > 0 && <p id="stock">Stock: {currentStock}</p>}

          <div>
            {currentStock > 0 ? (
              <ItemCount count={count} handleCount={handleCount} />
            ) : (
              <span id="sin-stock">Sin stock</span>
            )}
            <div id="bottons">
              <button
                onClick={handleAdd}
                id="botton-card"
                disabled={currentStock === 0}
              >
                AGREGAR AL CARRITO
              </button>
              <button
                onClick={handleCheckout}
                id="botton-compra"
                disabled={!isInCart(item.id)}
              >
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
