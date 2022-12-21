import "./style.css"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../../hooks/useGetItemImg";
import { Loading } from "../loading/Loading";


export const Item = ({ product, quantityAdded }) => {
	const navigate = useNavigate();
	const img = useGetItemImg(product.img);
  
	
	function handleNavigate() {
	  navigate(`/item/${product.id}`);
	}
  
	if (!img) {
	  return <Loading />;
	}
	

  return (

	<Card id="card" >
		<div onClick={handleNavigate} id="preview">	
		<a>	
    	<Card.Img  src={img} id="img" /> 
			<Card.Title id="name">{product.name}</Card.Title>
      			<Card.Text id="text">${product.price}</Card.Text> 
				  </a> 
				  </div> 
				<Card.Text id="descuento">3 cuotas sin interés de ${product.descuento}</Card.Text>
				<span className="stock-agregados">
					{product.stock === 0 ? "Sin Stock": quantityAdded ? `Agregados: ${quantityAdded}`: `En Stock: ${product.stock}`}
				</span>
    </Card>
	

  );
}

