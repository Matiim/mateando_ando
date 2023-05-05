import React from 'react';
import ReactDOM from 'react-dom/client';

import { CartContextProvider } from "./Context/cartContext";
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { router } from "./router/index";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
