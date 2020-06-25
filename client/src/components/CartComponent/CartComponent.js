import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmptyCart from "./EmptyCart/EmptyCart";
import "./cart-component.css"

class CartComponent extends Component {

    render() {

        let list = this.props.addedItems.length === 0 ? <EmptyCart /> : this.props.addedItems.map(item => {
               return <div className="checkout-items">
                    <h1>Items For Checkout</h1>
                    <h6>{item.title}</h6>
                    <img src={item.img} />
               </div>
                
               
        })
            return(
         <div>
            {list}
         </div>
     )

    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(CartComponent);