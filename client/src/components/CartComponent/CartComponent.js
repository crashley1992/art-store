import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmptyCart from "./EmptyCart/EmptyCart";
import "./cart-component.css"

class CartComponent extends Component {

    render() {

        let list = this.props.addedItems.length === 0 ? <EmptyCart /> : this.props.addedItems.map(item => {
               return <div className="checkout-items">
                    <h1>Items For Checkout</h1>
                    <h6 key={item.id}>{item.title}</h6>
                    <img key={item.id} src={item.img} />
               </div>  
        })

            return(
         <div>
            <h5>Total: {this.props.total}</h5>
            {list}
         </div>
     )

    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(CartComponent);