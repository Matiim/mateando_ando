import {ItemList} from "../ItemList/itemList";
import { Loading } from "../loading/Loading";
import { useGetItem } from "../../hooks/useGetItem";




export const ItemListContainer = () => {
	const items = useGetItem();
  
	if (!items) {
	  return <Loading />;
	}
  
	return (
	  <div>
		<ItemList products={items} />
	  </div>
	);
  };
