import React, {Component} from 'react'
import { connect } from 'react-redux'

import ProductListItem from '../component/product-list-item';
import { addToCart } from '../../actions'
import {getVisibleproducts} from '../../services';

class ShoppingListComponent extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        const {products, addToCart, symbol} = this.props;

        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        <div className="row">
                            { products.map((product, index) =>
                                <ProductListItem product={product} symbol={symbol}
                                        onAddToCartClicked={addToCart} key={index}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}    

const mapStateToProps = (state) => ({
    products: getVisibleproducts(state.data, state.filters),
    symbol:state.data.symbol
})

export default connect(
    mapStateToProps,
    {addToCart}
)(ShoppingListComponent)