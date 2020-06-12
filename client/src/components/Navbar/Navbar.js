import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaStore } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Obement Art</Link>

                <ul className="nav-links">
                    <li className="nav-item"><Link to="/">Shop <FaStore size={25} className="shopping-icon"/></Link></li>
                    <li className="nav-item"><Link to="/cart">Checkout<FaShoppingCart size={25} className="shopping-icon"/></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;