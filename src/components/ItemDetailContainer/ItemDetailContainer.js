import { useGetItem } from "../../hooks/useGetItem";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Loading } from "../loading/Loading";

const ItemDetailContainer = () => {
	const item = useGetItem();
  
	if (!item) {
	  return <Loading />;
	}
  
	return (
	  <div >
		<ItemDetail item={item} />
	  </div>
	);
  };
  
  export default ItemDetailContainer;