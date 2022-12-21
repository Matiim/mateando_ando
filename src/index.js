import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartContextProvider } from "./Context/cartContext";
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { router } from "./router/index";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0MvISA4mqIvRHbc0fQ1pr0ZBteGqQX04",
  authDomain: "ecommerce-mateando-ando.firebaseapp.com",
  projectId: "ecommerce-mateando-ando",
  storageBucket: "ecommerce-mateando-ando.appspot.com",
  messagingSenderId: "404438655623",
  appId: "1:404438655623:web:c0a3d6dde091cd2f150e22"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
