import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss'
import CartContainer from '../containers/cart';
import SearchComponent from '../containers/search';

export default function Header() {
    return (
        <div className="top-header sticky"  id="sticky" >
            <div className = "p1">
                <div>
                    <span>
                        <Link to={"/"}>
                            <i className="fa fa-star fs1p2r" style={{color:"#ffcf17"}}></i>
                        </Link>   
                    </span>
                    <span className="pl2">
                        <Link to={"/"} style={{color:"white"}}>
                                Go to Shop
                        </Link>
                    </span>    
                    <span className="pull-right disflex">
                        <SearchComponent/>   
                        <CartContainer/>
                    </span> 
                </div>    
            </div>
        </div>    
    )
}