import React, {Component} from 'react';


class ProductListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    
    render() {
        const {product, symbol, onAddToCartClicked} = this.props;
        let delTag = '';
        let discountText = '';
        if(product.discount !== 0 ) {
            delTag = <del><span className="money" style={{paddingLeft:"0.7rem", color: "grey"}}>{symbol}{product.price}</span></del>;
        }
        if(product.discount !== 0 ) {
            discountText = <span className = "pl2 discount-text">{product.discount}% off </span>;
        }
        
        return (
                <div className="col-xl-3 col-md-6 mt1r mb1r">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <div className="front">
                                <img
                                    src={product.img_url}
                                    className="img-fluid"
                                    alt="" />
                            </div>
                        </div>
                        <div className="product-detail">
                            <div>
                                <h6>{product.name}</h6>
                                <span  className = "disflex jstfar">
                                    <span>{symbol}{(product.price - (product.price*product.discount/100))}
                                        {delTag}
                                        
                                    </span>
                                    {discountText} 
                                </span>    
                                
                                
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning border-box disflex mauto mt1r" onClick={() => onAddToCartClicked(product, 1)}>
                                    Add to Cart
                    </button>
                </div>
        )
    }
}

export default ProductListItem;