import React, { Component } from 'react';
import SortComponent from '../common/sort'
import ShoppingListComponent from '../containers/shopping-list';
import FilterComponent from '../common/filter';
import Modal from 'react-bootstrap/Modal'
import FilterMobileComponent from '../common/filter-mobile';
import SortMobileComponent from '../common/sort-mobile';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterModalShow:false,
            sortModalShow:false
        }
        this.setFilterModalShow.bind(this);
        this.setSortModalShow.bind(this);
    }

    setFilterModalShow(show) {
        this.setState({
            filterModalShow:show
        })
    }
    setSortModalShow(show) {
        this.setState({
            sortModalShow:show
        })
    }
    render() {
        if(window.innerWidth > 1024) {
            return (
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-12 col-xl-2 filter-component">
                            <FilterComponent/>
                        </div>
                        <div className = "col-12 col-xl-10">
                            <SortComponent/>
                            <ShoppingListComponent/>
                        </div>
                    </div>  
                </div>      

            )
        }
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-12 col-xl-2">
                        <div class = "row">
                            <div className = "col-6 b1grey cen fs1p2r p1">
                                <button className="nude-button" onClick={() => this.setFilterModalShow(true)}><i className="fa fa-filter"></i><b>Filter</b></button>
                                <FilterModal
                                    show={this.state.filterModalShow}
                                    onHide={() => this.setFilterModalShow(false)}
                                />
                            </div>
                            <div className = "col-6 b1grey cen fs1p2r p1">
                                <button className="nude-button" onClick={() => this.setSortModalShow(true)}><i className="fa fa-sort"></i><b>Sort</b></button>
                                <SortModal
                                    show={this.state.sortModalShow}
                                    onHide={() => this.setSortModalShow(false)}
                                />
                            </div>
                        </div>   
                    </div>
                    <div className = "col-12 col-xl-10">
                        <ShoppingListComponent/>
                    </div>
                </div>  
        </div> );
    }
}

function FilterModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FilterMobileComponent close={props.onHide}/>
      </Modal>
    );
}

function SortModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <SortMobileComponent close={props.onHide}/>
      </Modal>
    );
}