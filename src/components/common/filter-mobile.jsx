import React, { useState } from 'react'
import { connect } from 'react-redux'
import InputRange from 'react-input-range'
import {getVisibleproducts} from '../../services'
import {filterPrice} from '../../actions'
import "react-input-range/lib/css/index.css"

function FilterMobileComponent(props) {
    const {symbol,filters} = props;
    const [value, setValue] = useState({min:filters.value.min, max:filters.value.max});

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
                    <div class="row mb1r">
                        <div className = "col-12 col-xl-2">
                            <div class = "row">
                                    <div className = "col-6 b1grey cen fs1p2r p1">
                                        <button className="nude-button" onClick={() => {
                                                props.filterPrice(value)
                                                props.close()
                                            }
                                        }>Apply</button>
                                        
                                    </div>
                                    <div className = "col-6 b1grey cen fs1p2r p1">
                                        <button className="nude-button" onClick={() => {
                                                props.close()
                                            }
                                        }>Cancel</button>
                                    </div>
                                </div>   
                            </div>
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

export default connect(mapStateToProps, {filterPrice})(FilterMobileComponent);