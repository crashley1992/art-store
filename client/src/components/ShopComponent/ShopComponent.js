import React, { Component } from "react";
import { connect } from "react-redux";
import CanvasListComponent from "./canvasList/CanvasListComponent";
import "./shop-component.css";
import Footer from "../Footer/Footer";

class ShopComponent extends Component {
    render() {
        // Maps item description to div from cartReducer
        let itemList = this.props.items.map(item => {
            return(
                <div className="img-container" key={item.id}>
                    <div className="image">
                        <img src={item.img} alt={item.title} />
                        <span className="item-title">{item.title}</span>
                        <p>{item.desc}</p>
                        <CanvasListComponent />
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <h1 className="main-header">Avaiable Art</h1>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        items: state.items,
        canvasType: state.canvasType
    }
}

export default connect(mapStateToProps)(ShopComponent);