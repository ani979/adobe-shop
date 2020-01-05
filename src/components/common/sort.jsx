import React, {Component} from 'react'
import { connect } from 'react-redux'
import {filterSort} from '../../actions'
import {getVisibleproducts} from '../../services'

class SortComponent extends Component {
    constructor(){
        super();

        this.state = {
           htol: true,
           ltoh:false,
           discount:false
        }
        this.changeColor.bind(this);
    }

    changeColor(type) {
        if (type === "htol") {
            this.setState({
                htol: true,
                ltoh:false,
                disc:false
            })
        } else if (type === "ltoh") {
            this.setState({
                htol: false,
                ltoh:true,
                disc:false
            })
        } else {
            this.setState({
                htol: false,
                ltoh:false,
                disc:true
            })
        }
        
     }

    render (){
        let title;
        let btn_htol_class = this.state.htol ? "blue-button" : "nude-button";
        let btn_ltoh_class = this.state.ltoh ? "blue-button" : "nude-button";
        let btn_disc_class = this.state.disc ? "blue-button" : "nude-button";
        if(this.props.products.length > 0) {
            title = "Showing Products 1-" + this.props.products.length;
        } else {
            title = "Showing Results";
        }
        return (
            <div>
                <h6 style= {{display:"inline"}}> <b>Sort by</b> </h6>
                <span className="product-sort mt1r mb1r">
                    <button className = {btn_htol_class} onClick={(e) => {
                        this.changeColor("htol");
                        this.props.filterSort("HighToLow")} 
                    }>Price -- High Low</button>    
                    <button className = {btn_ltoh_class} onClick={(e) => {
                        this.changeColor("ltoh");
                        this.props.filterSort("LowToHigh")} 
                    }>Price -- Low High</button>    
                    <button className = {btn_disc_class} onClick={(e) => {
                        this.changeColor("disc");
                        this.props.filterSort("Discount")} 
                    }>Discount</button>  
                </span>
                <h5>{title}</h5>
                
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort})(SortComponent);