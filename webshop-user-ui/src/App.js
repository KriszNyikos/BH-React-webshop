import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Offering from './components/Carousel/Carousel'
import Grid from './components/Grid/Grid'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout';
import ProductPage from './components/ProductPage/ProductPage'

class App extends Component {

  async componentDidMount(){
   fetch('http://localhost:3050/store-data', {method: 'GET'})
   .then(res => res.json())
   .then(res => this.props.dispatch({type: 'UPDATE_DATAS', payload: res}))
    //this.props.dispatch({type: 'UPDATE_DATAS', payload: {}})
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>

            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/checkout">
                <Checkout />
              </Route>

              <Route path="/products">
                <Offering />
                <Grid />
              </Route>
              <Route path="/product/:sku" component={ProductPage} />

              <Route path="/">
                <Redirect to='/products'/>
              </Route>
            </Switch>

          </div>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default connect(null, null)(App);
