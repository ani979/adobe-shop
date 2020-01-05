import React, {useState} from 'react'
import { connect } from 'react-redux'
import {getVisibleproducts} from '../../services'
import {filterText} from '../../actions'

function SearchComponent(props) {
    const [searchText, setSearchtext] = useState("Search");
    
    return (
        <div>
            <input type="text" className="input-text-search" placeholder = {searchText} onChange={(e) => props.filterText(e.target.value)}/>
            <span className = "search-bar">
                                <i className="fa fa-search fs1p2r" style={{color:"#ffffff"}}></i>
                                {/* <input type="search" placeholder="Search"/> */}
            </span>
        </div>     
    )
}
const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters,
})

export default connect(mapStateToProps, {filterText})(SearchComponent);