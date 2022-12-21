import { createBrowserRouter } from "react-router-dom";

import App from "../App"
import Item from "../views/item";
import Category from "../views/category";
import Cart from "../views/Cart/cart";
import Checkout from "../views/Checkout/checkout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path:"/category/:category",
		element: <Category />,
	},
	{
		path:"/item/:id",
		element:<Item />,
	},
	{ 
		path: "/checkout", 
		element: <Checkout />, 
	},
])