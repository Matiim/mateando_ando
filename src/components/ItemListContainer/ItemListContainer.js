import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/itemList";
import { Loading } from "../loading/Loading";
import { Items } from "../../mocks/items.mock";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setProducts([]);
      return setTimeout(() => {
        resolve(Items);
      }, 3000);
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
    return <Loading />;
  }

  return (
    <div className="h-full">
      <ItemList products={products} />
    </div>
  );
};