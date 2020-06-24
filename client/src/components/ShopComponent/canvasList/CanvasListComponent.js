import React, { Component } from "react";
import { connect } from "react-redux";
import "./canvas-list.css";
import { GrAdd } from "react-icons/gr";
import  { addToCart }  from "../../actions/cartActions";

class CanvasListComponent extends Component {

    handleAdd = (id) => {
        this.props.addToCart(id)
        console.log(id + " change")
    }

    handleSubmit = () => {
        this.handleAdd()
    }

        render() {
            //gets each canvas type to render for users to select diff sizes
            let canvasList = this.props.canvasType.map(canvas => {
               return(
                    <option onClick={this.handleAdd(canvas.id)} key={canvas.id}>{canvas.type} | Price: {canvas.price}</option>                
               )
            })
            
            return(
                <div>
                    <h5>Select a Canvas Size</h5>
                    <select>
                    {canvasList}
                    </select> 
                    <button class="cart-add" type="submit" value="submit" onClick={this.handleSubmit}>Add to Cart
                    <GrAdd id="add-icon"/>
                    </button>

                </div>
                
            )
        }
                   
}
    

const mapStateToProps = (state) => {
    return {
        canvasType: state.canvasType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasListComponent);