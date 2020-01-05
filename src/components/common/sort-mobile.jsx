import React, {Component} from 'react'
import { connect } from 'react-redux'
import {filterSort} from '../../actions'
import {getVisibleproducts} from '../../services';

class SortMobileComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortType:props.filters.sortBy
        }
    }

    setSortType(sortType) {
        this.setState({
            sortType:sortType
        })
    }
    render(){
        return (
            <div class="sort-box">
                <h6> <b>Sort Options</b> </h6>
                <span className="product-sort mt1r mb1r" style={{color:"grey"}}>
                    <form>
                        <div className="radio">
                            <label>
                                <input type="radio" checked={this.state.sortType ==="HighToLow"} onChange={() =>this.setSortType("HighToLow")}/>
                                Price -- High Low
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" checked={this.state.sortType ==="LowToHigh"} onChange={() =>this.setSortType("LowToHigh")}/>
                                Price -- Low High
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" checked={this.state.sortType ==="Discount"} onChange={() =>this.setSortType("Discount")}/>
                                Discount
                            </label>
                        </div>
                    </form>    
                </span>
                <div class="row">
                        <div className = "col-12 col-xl-2">
                            <div class = "row">
                                    <div className = "col-6 b1grey cen fs1p2r p1">
                                        <button className="nude-button adBlue" onClick={() => {
                                                this.props.filterSort(this.state.sortType)
                                                this.props.close()
                                            }
                                        }>Apply</button>
                                        
                                    </div>
                                    <div className = "col-6 b1grey cen fs1p2r p1">
                                        <button className="nude-button adBlue" onClick={() => {
                                                this.props.close()
                                            }
                                        }>Cancel</button>
                                    </div>
                            </div>
                        </div>    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort})(SortMobileComponent);