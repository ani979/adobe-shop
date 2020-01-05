import { combineReducers } from 'redux';

// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import filtersReducer from './filters';


const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
});

export default rootReducer;