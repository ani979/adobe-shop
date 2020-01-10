
import React from 'react';
import Header from './common/header';
import { ToastContainer } from 'react-toastify';
import Footer from './common/footer';

export default function Layout(props) {
    return (
        <div className="container-fluid">
            <Header />
            {props.children}
            <Footer/>
            <ToastContainer position="top-left"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop
                    closeButton={false}
            rtl/>
        </div>
    )
}
