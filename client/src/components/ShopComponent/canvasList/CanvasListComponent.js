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
                <option id={this.props.canvasType[0].id} value={this.props.canvasType[0].id}>{this.props.canvasType[0].type} | Price: {this.props.canvasType[0].price}</option> 
                <option id={this.props.canvasType[1].id} value={this.props.canvasType[0].id}>{this.props.canvasType[1].type} | Price: {this.props.canvasType[1].price}</option> 
            </select>
            <button class="cart-add" type="submit" value="submit" onClick={() => {this.props.handleAdd(this.props.value)}}>Add to Cart
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