import "./style.css";


export const ItemCount = ({ count, handleCount }) => {
	return (
	  <div>
		<button
		  onClick={() => handleCount("plus")} id="suma" >+</button>
		
		<span id="counter">{count}</span>
		<button onClick={() => handleCount("minus")} id="resta"> - </button>
	  </div>
	);
  };

