import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import "./footer.css";



const Footer = () => {
    return(
        <div className="footer">
            <p>Original Art By Olivia Bement</p>
            <FaInstagram size={35} id="instagram-icon"/>
        </div>
    )
}

export default Footer;