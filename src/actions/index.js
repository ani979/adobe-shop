import * as types from '../constants/ActionTypes'
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});



export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    fetch("https://api.myjson.com/bins/qzuzi")
    .then((resp) => resp.json())
    .then(function(data) {
            // Here you get the data to modify as you please
            dispatch(receiveProducts(data));
            return data;
        }).catch(function(error) {
           return [];
        });   
    
}
export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})




//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}

export const addToCartUnsafe = (product, qty) => ({
    type: types.ADD_TO_CART,
    product,
    qty,
});

export const removeFromCart = product_id => ({
    type: types.REMOVE_FROM_CART,
    product_id
});

export const emptyCart =() => ({
    type: types.EMPTY_CART
});

export const incrementQty = (product,qty) => (dispatch) => {
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty = (productId,size) => ({
    type: types.DECREMENT_QTY,
    productId
});

export const filterPrice = (value) => ({
    type: types.FILTER_PRICE,
    value
});

export const filterText = (searchText) => ({
    type: types.SEARCH,
    searchText
});

export const filterSort = (sort_by) => ({
    type: types.SORT_BY,
    sort_by
});

