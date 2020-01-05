import React from 'react'

export default function CartListItem(props) {
    let {product, symbol} = props;
    let delTag = '';
    let discountTag = '';
    if(product.discount !== 0 ) {
        delTag = <del><span className="money" style={{paddingLeft:"0.7rem", color: "grey"}}>{symbol}{product.price}</span></del>;
        discountTag = <span className = "pl2 discount-text">{product.discount}% off </span>;
    }
    return (
        <div className = "disflex cart-card col-md-12">
            <img
                                    src={product.img_url}
                                    className="img-fluid"
                                    alt="" 
                                    style={{width:"10%"}}/>
            <div className = "disflex cart-desc col-md-4">
                <div>
                {product.name}
                </div>
                <div>
                    <span>{symbol}{(product.price - (product.price*product.discount/100))}
                                            {delTag}
                                            
                    </span>
                    {discountTag}
                </div>    
            </div>    
            <div className="qty-box col-md-4">
                <div className="input-group">
                    <span>
                        <button type="button" className="btn quantity-left-minus" onClick={() => props.incrementQty(product, 1)} data-type="minus" data-field="">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                    </span>
                    <input type="text" name="quantity" value={product.qty} readOnly={true} className="form-control input-number" maxLength="2" />

                    <span>
                    <button className="btn quantity-right-plus" onClick={() => props.decrementQty(product.id)}  data-type="plus">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                    </span>
                </div>
            </div>
            <div className = "remove-box col-md-4">
                <a href="#" className="icon" onClick={() => props.removeFromCart(product)} style={{color:"black"}}>
                                <b>REMOVE</b>
                </a>
            </div>    
        </div>
    )
}