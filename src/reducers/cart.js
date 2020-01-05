import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
    INCREMENT_QTY,
    DECREMENT_QTY } from "../constants/ActionTypes";

export default function cartReducer(state = {
    cart: []
}, action) {

    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id 
            const price = action.product.price;
            let foundCartItem = state.cart.findIndex(
                                    product => product.id === productId);
            if(foundCartItem != -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    
                    if (product.id === productId) {
                        //console.log('price: '+product.price+'Qty: '+product.qty)
                        cartAcc.push({ 
                            ...product, qty: product.qty+action.qty, 
                            sum: (price - (price*product.discount/100))*(product.qty+action.qty)
                        }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }
            return { ...state, 
                cart: [...state.cart, 
                    { ...action.product, 
                        qty: action.qty, 
                        sum: (price-(price*action.product.discount/100))*action.qty}] }

        case DECREMENT_QTY:
            if (state.cart.findIndex(
                product => 
                    product.id === action.productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId) {
                        if (product.qty > 1) {
                            const price = product.price;
                            cartAcc.push({ ...product, qty: product.qty-1, sum: (price - (price*product.discount/100))*(product.qty-1) }) // Decrement qty
                        } 
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: action.product.price*action.qty }] }

        case REMOVE_FROM_CART:
            //console.log("action.product_id ", action)
            return {
                cart: state.cart.filter(id => id !== action.product_id)
            }

        case EMPTY_CART:
            //console.log("here in empty cart");
            return { cart:[]}   

        default:
    }
    return state;
}
