import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

class Navbar extends Component {

    state = {
        visible: false,
        display: "none"
    }

    handleMenu = () => {
        this.setState({ visible:  !this.state.visible})
        console.log(this.state.visible)
        this.handleDisplay()
    }

    handleDisplay = () => {
        if(this.state.visible === false) {
            this.setState({display: "block"})
        } else {
            this.setState({display: "none"})
        }
     }

    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Obement Art</Link>
    
                <div className="mobile-toggle">
                    <MdMenu size={35} id="menu-button" onClick={this.handleMenu}/>
                    <div className="mobile-links-display" style={{display: this.state.display}}>
                        <li className="mobile-nav-item"><Link to="/shop">Shop <FaStore size={25} className="shopping-icon"/></Link></li>
                            <li className="mobile-nav-item"><Link to="/cart">Checkout<FaShoppingCart size={25} className="shopping-icon"/></Link></li>
                    </div>
                </div>
    
                    <ul className="nav-links">
                        <li className="nav-item"><Link to="/">Shop <FaStore size={25} className="shopping-icon"/></Link></li>
                        <li className="nav-item"><Link to="/cart">Checkout<FaShoppingCart size={25} className="shopping-icon"/></Link></li>
                    </ul>
                </div>
    
            </nav>
        )
    }
    
}

export default Navbar;