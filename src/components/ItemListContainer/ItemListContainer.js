import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css"
import ItemList from "../ItemList/itemList";
import {Items} from "../../mocks/item.mocks"
import { Loading } from "../loading/Loading";

export const ItemListContainer = () => {
	const { category } = useParams();
	const [products, setProducts] = useState([]);
  
	useEffect(() => {
		new Promise((resolve) => {
			
			setProducts([]);
	  
			
			return setTimeout(() => {
			  resolve(Items);
			}, 1000);
		  }).then((data) => {
			if (category) {
			  const categories = data.filter(
				(product) => product.category === category
			  );
			  setProducts(categories);
			} else {
			  setProducts(data);
			}
		  });
		}, [category]);
  
	if (products.length === 0) {
	  return <Loading />;;
	}
  
	return (
	  <div className="h-full">
		<ItemList products={products} />
	  </div>
	);
  };

export default ItemListContainer;