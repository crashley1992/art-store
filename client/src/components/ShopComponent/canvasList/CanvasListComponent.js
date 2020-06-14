import React, { Component } from "react";
import { connect } from "react-redux";
import "./canvas-list.css";
import { GrAdd } from "react-icons/gr";

class CanvasListComponent extends Component {
        render() {
                   
        
     return(
        <div className="canvas-checklist">
        <form>
            <label id="canvas-label" for="canvas">Select Canvas Type</label>
            <select name="canvas" id="canvas-type">
                <option value={this.props.canvasType.type}>{this.props.canvasType[0].type}| Price: {this.props.canvasType[0].price}</option> 
                <option value={this.props.canvasType.type}>{this.props.canvasType[1].type}| Price: {this.props.canvasType[1].price}</option> 
            </select>
            <button class="cart-add" type="submit" value="submit">Add to Cart
            <GrAdd id="add-icon"/>
            </button>
        </form>
    </div>
        )
     }
 }
    

const mapStateToProps = (state) => {
    return {
        canvasType: state.canvasType
    }
}

export default connect(mapStateToProps)(CanvasListComponent);