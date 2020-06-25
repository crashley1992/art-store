import React, { Component } from "react";
import { connect } from "react-redux";
import "./shop-component.css";
import  { addToCart, addToTotal }  from "../actions/cartActions";
import { GrAdd } from "react-icons/gr";

class ShopComponent extends Component {

    //id is how item added to cart is tracked
    handleClick = (id)=>{
        console.log(id)
        this.props.addToCart(id);
    }

    //tracks price for added to cart
     handlePrice = (event) => {
            event.preventDefault()
            let value = event.target.value
            console.log(value + " selected")
            this.props.addToTotal(value)
    }


    render() {
        // Maps item description to div from cartReducer
        let itemList = this.props.items.map(item => {
            let canvasList = item.canvasType.map(canvas => {
                return(
                    <option key={canvas.id} value={canvas.price} key={canvas.id}>{canvas.type} | Price: {canvas.price}</option> 
                )
            });

            return(
                <div className="img-container" key={item.id}>
                    <div className="image">
                        <img src={item.img} alt={item.title} />
                        <span className="item-title">{item.title}</span>
                        <p>{item.desc}</p>
                        <select onChange={this.handlePrice}>
                        <option>Select a Canvas Size</option>
                        {canvasList}
                        </select>
                        <button className="cart-add" type="submit" value="submit" onClick={()=>{this.handleClick(item.id)}}>Add to Cart
                    <GrAdd id="add-icon"/>
                    </button>
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
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        addToTotal: (value) => { dispatch(addToTotal(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);