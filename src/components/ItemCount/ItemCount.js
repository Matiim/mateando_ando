import "./style.css";


export const ItemCount = ({ count, handleCount }) => {
	return (
	  <div id="count">
		<button onClick={() => handleCount("minus")}id="resta">
		  -
		</button>

		<span id="counter">
		  {count}
		</span>

		<button onClick={() => handleCount("plus")} id="suma">
	 		+
		</button>
	  </div>
	);
  };