import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

const Item = ({ product }) => {
	const navigate = useNavigate();

	function handleNavigate() {
		navigate(`/item/${product.id}`);
	  }
  return (

	<Card id="card" >
    	<Card.Img  src={product.img} id="img" /> 
		<Card.Body >
		<Card.Title id="name">{product.name}</Card.Title>
      		<Card.Text id="text"> {product.price}</Card.Text>
	 <div id="botones"> <Button id="compra"> <BsCart2/> </Button>
	<div onClick={handleNavigate}>	
			<Button id="preview"> <AiOutlineEye/> </Button> 
	</div> 
	</div>
      	</Card.Body>
    </Card>

  );
}

export default Item;