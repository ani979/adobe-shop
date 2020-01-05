import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getCartTotal} from "../../services";
import {removeFromCart, incrementQty, decrementQty} from '../../actions'
import CartListItem from '../component/cart-list-item';
import TotalPriceComponent from '../component/total-price-display';

class CartComponent extends Component {

    constructor (props) {
        super (props)
    }
    render () {
        
        const {cartItems, symbol, priceObject, incrementQty, decrementQty, removeFromCart} = this.props;
        
        return (
            <div>
                {cartItems.length>0 ?
                <section>
                    {/* <div className="container"> */}
                        <div className="cart-display">
                            <div className="col-md-12 col-xs-12">
                                <div className = "row">
                                        <div className = "col-md-8">
                                        {cartItems.map((item, index) => {
                                            return (
                                                <CartListItem product={item} 
                                                              symbol={symbol}
                                                              incrementQty={incrementQty}
                                                              decrementQty={decrementQty}
                                                              removeFromCart = {removeFromCart}
                                                              />
                                            )
                                        })}
                                        </div>
                                        <div className = "col-md-4">
                                            <TotalPriceComponent total = {priceObject.total} 
                                                        discount = {priceObject.discount}
                                                        count = {priceObject.count}
                                                        actualCost = {priceObject.actualCost}
                                                        symbol={symbol}/>
                                        </div>    
                                </div>
                            </div>    
                        </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <i class="fa fa-battery-empty" style= {{fontSize:"8rem"}}></i>
                                        <h3>
                                            <strong>Your Cart is Empty</strong>
                                            
                                        </h3>
                                        <h4>Explore more, shortlist some items</h4>
                                        <a href = "/"> GO HOME </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    priceObject : getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    {removeFromCart, incrementQty, decrementQty}
)(CartComponent)