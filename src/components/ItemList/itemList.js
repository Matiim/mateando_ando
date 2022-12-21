import { Item } from "../Item/item";
import "./style.css"



export const ItemList = ({ products }) => {
  return (
    <ul id="item-list">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

