import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Grid from './components/Grid/Grid'
import Footer from './components/Footer/Footer'

function App() {
  return (
  <Router>
    <div>
      <Header/>
      <div>
      
        <Switch>
        <Route path="/cart">
              <Cart/>
        </Route>

        <Route path="/">
              <Carousel/>
              <Grid/>
        </Route>
        </Switch>
      
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
