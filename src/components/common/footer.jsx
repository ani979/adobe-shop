import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss'
import CartContainer from '../containers/cart';
import SearchComponent from '../containers/search';

export default function Footer() {
    return (
        <div className="footer" >
            <h6 className="cen white" style={{alignSelf:"center"}}>@copyright</h6>
        </div>    
    )
}