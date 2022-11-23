import Item from '../Item/item'
import "./style.css"



const ItemList = ({ products }) => {
  return (
    <ul id="item-list">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

export default ItemList;