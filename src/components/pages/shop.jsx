import React, { Component } from 'react';
import SortComponent from '../common/sort'
import ShoppingListComponent from '../containers/shopping-list';
import FilterComponent from '../common/filter';

export default class Shop extends Component {
    render() {
        return (
            <div className = "row col-md-12">
                <div className = "col-md-2 filter-component">
                    <FilterComponent/>
                </div>
                <div className = "col-md-10">
                    <SortComponent/>
                    <ShoppingListComponent/>
                </div>
            </div>      

        )
    }
}