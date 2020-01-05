import React from 'react'

export default function TotalPriceComponent(props) {
    let {total, discount, count, actualCost, symbol} = props;
    var priceText = "";
    if(count <= 1) {
        priceText = "Price (" + count + " item)"
    } else {
        priceText = "Price (" + count + " items)"
    }
    return (
        <div className = "cart-card">
            <div>
                <h4 style={{color:"grey"}}> Price Details </h4>
                <hr/>
            </div>
            
            <div>
                <div className="pricing-text">
                    <span>{priceText}:</span><span>{symbol}{actualCost}</span>
                </div>
                <div className="mt1r pricing-text">
                    <span>Discount:</span><span>{symbol}{discount}</span>
                </div>    
            </div>    
            <hr style={{borderTop:"1px solid rgba(0,0,0)"}}/>
            <div>
                
                <div className="mt1r pricing-text">
                    <span><b>Total Payable:</b></span><span><b>{symbol}{total}</b></span>
                </div>    
            </div>
        </div>  
    )

}