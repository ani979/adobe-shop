import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import store from './store';
import { getAllProducts } from './actions';
import Layout from './components/app';
import Shop from './components/pages/shop'
import CartComponent from './components/containers/cart-component';

export default function Root() {
    store.dispatch(getAllProducts());
    return (
        <Provider store={store}>
            <BrowserRouter basename={"/adobe-shop"} >
                <Layout>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Shop}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={CartComponent}/>
                    </Switch>
                </Layout>        
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));