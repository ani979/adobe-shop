import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeFromCart} from '../../actions'
import {getCartTotal} from '../../services'

const CartContainer = ({cartList}) => (
     <span  className="onhover-div mobile-cart pl2 pr2"><div className="cart-qty-cls">{cartList.length}</div>
        <Link to={"/cart"}>
            <i className="fa fa-shopping-cart fs1p2r" style={{color:"ffffff"}}></i>
        </Link>
    </span>
)


function mapStateToProps(state) {
    return {
        cartList: state.cartList.cart,
        total: getCartTotal(state.cartList.cart),
        symbol: state.data.symbol,
    }
}

export default connect(mapStateToProps, {removeFromCart})(CartContainer);
