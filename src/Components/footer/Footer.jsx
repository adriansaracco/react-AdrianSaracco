import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import "./footer.css";

export const Footer = () =>{
    return(
        <div className="footer">
           
            <p>Desarrollado por Adrián Saracco</p>
            <div className="redes">
            <p>Nuestras redes</p>
            <a href="#" target="_blank"><AiFillInstagram className="ico"/></a>
            <a href="#" target="_blank"><FaFacebook className="ico"/></a>
            </div>
        </div>
    )
} 