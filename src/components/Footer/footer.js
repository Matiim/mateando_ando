import React from "react";

import mercado from "../../assests/img/footer/tarjetas/mercadopago.png";
import Deposito from "../../assests/img/footer/tarjetas/deposito.png";
import visa from "../../assests/img/footer/tarjetas/visa.png";
import Efectivo from "../../assests/img/footer/tarjetas/efectivo.png";
import Mercadopago from "../../assests/img/footer/tarjetas/mercadopago.png";
import Naranja from "../../assests/img/footer/tarjetas/naranja.png";
import Pagofacil from "../../assests/img/footer/tarjetas/pagofacil.png";
import Rapipago from "../../assests/img/footer/tarjetas/rapipago.png";

import Retiro from "../../assests/img/footer/envios/retiro-local.png";
import Personalizado from "../../assests/img/footer/envios/personalizado.png";
import Oca from "../../assests/img/footer/envios/oca.png";

import {  BsFacebook } from 'react-icons/bs';
import {  BsInstagram } from 'react-icons/bs';
import {  BsTwitter } from 'react-icons/bs';

import "./style.css";


const Footer = () => {
  return (
	<footer className="footer">

<div className="footer-left">
	<div className="redes-card">
        <div className="card-tarjetas">
		<h5 className="pagos">MEDIOS DE PAGO</h5>
          <div className="footer-tarjetas">
            <img src={visa} alt="Tarjeta Visa" id="tarjetas"/>
            <img src={Deposito} alt="Tarjeta Mastercard" id="tarjetas"/>
            <img src={mercado} alt="Mercado Pago" id="tarjetas"/>
			<img src={Efectivo} alt="Mercado Pago" id="tarjetas"/>
			<img src={Mercadopago} alt="Mercado Pago" id="tarjetas"/>
			<img src={Naranja} alt="Mercado Pago" id="tarjetas"/>
			<img src={Pagofacil} alt="Mercado Pago" id="tarjetas"/>
			<img src={Rapipago} alt="Mercado Pago" id="tarjetas"/>
          </div>
        </div>
	<div className="card-envios">
		<h5 className="envios">MEDIOS DE ENVÍO</h5>
		<div className="footer-tarjetas">
            <img src={Oca} alt="Envios" id="tarjetas"/>
            <img src={Retiro} alt="Envios" id="tarjetas"/>
            <img src={Personalizado} alt="Envios" id="tarjetas"/>
          </div>
	</div>
</div>


<div className="footer-right">
	<div className="redes">
          <h5 className="redes-title">NUESTRAS REDES SOCIALES</h5>
          <div className="iconRedes">
		 	 <a href="#" className="insta"><BsInstagram/></a> 
			 <a href="#" className="twit"><BsTwitter/></a>
			<a href="#" className="face"><BsFacebook/></a>  
          </div>
    </div>

	<div className="contacto">
		<h5 className="contacto-title">CONTACTO</h5>
		<ul className="contacto-lista">
			<li >✉️ matendoando@gmail.com</li>
			<li >📞 114563782943</li>
		</ul>
	</div>
	</div>
</div>
      <div className="copy">
        <span className="footerCopy">&copy;Copyright  - 2022 Términos y Condiciones</span>
		<p className="miNombre">Diseño y desarrollo por <a href="https://www.linkedin.com/in/matias-martinez-02a3b0238/" target="blank">Matías Martinez</a></p>
      </div>
    
</footer>
	
  );
};

export default Footer;



