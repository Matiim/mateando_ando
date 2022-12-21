import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { MdClose } from 'react-icons/md';
import "./style.css"

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
 
  return (
    <button onClick={() => removeItem(itemId)} className="remove-botton">
		<MdClose/>
    </button>
  );
};