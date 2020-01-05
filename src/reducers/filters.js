import * as types from '../constants/ActionTypes'


const filtersReducerDefaultState = {
    value: { min: 100, max: 1000 },
    sortBy: "HighToLow",
    searchText:""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        
        case types.FILTER_PRICE:
            return {
                ...state,
                value: {min: action.value.min, max: action.value.max }
            };
        case types.SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };

        case types.FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                sortBy: filtersReducerDefaultState.sortBy,
                value: filtersReducerDefaultState.value
            };
        
        case types.SEARCH:
            return {
                ...state,
                searchText: action.searchText
            };
        
        default:
            return state;
    }
}

export default filtersReducer;