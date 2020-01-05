import React, { useState } from 'react'
import { connect } from 'react-redux'
import InputRange from 'react-input-range'
import {getVisibleproducts} from '../../services'
import {filterPrice} from '../../actions'
import "react-input-range/lib/css/index.css"

function FilterComponent(props) {
    const {symbol} = props;
    const [value, setValue] = useState({min:100, max:1000});

    return (
        <div className="mt1r slidecontainer">
            <h6 className="cen"> <b>Filters </b></h6>
                <div className = "mt2r">
                    <InputRange
                        formatLabel={value => `${symbol}${value}`}
                        maxValue={1000}
                        minValue={100}
                        value={value}
                        onChange={(value) => setValue(value)} 
                    />
                    <p className="cen" style={{color:"grey", fontWeight:"400"}}>Price</p>
                    <div>
                        <button className="btn border-box disflex mauto apply-filter" onClick={() => props.filterPrice(value)}>Apply</button>
                    </div>    
                </div>
        </div>
    )
}
const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters,
    symbol: state.data.symbol,
})

export default connect(mapStateToProps, {filterPrice})(FilterComponent);