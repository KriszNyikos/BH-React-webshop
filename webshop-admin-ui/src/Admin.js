import React from 'react';
import './Admin.css';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Dashboard from './components/dashboard';
import Products from './components/products';
import UploadProductForm from './components/UploadProductForm';
import UpdateProduct from './components/UpdateProduct'
import OrderTable from './components/OrderTable/OrderTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Row } from 'react-bootstrap'
import logo from './logo.png'

export default class Admin extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container id="mainnav" className="align-items-center justify-content-center" fluid>
          <Row><img src={logo} style={{width: '100px', height: '100px'}} alt='logo' /> </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Nav>
            <Nav.Item>
              <NavLink exact to="/" style={{ margin: "10px" }} activeStyle={{ fontWeight: "bold" }}>Dashboard</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact to="/orders" style={{ margin: "10px" }} activeStyle={{ fontWeight: "bold" }}>Orders</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/products" style={{ margin: "10px" }} activeStyle={{ fontWeight: "bold" }}>Products</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/upload-product" style={{ margin: "10px" }} activeStyle={{ fontWeight: "bold" }}>Upload Products</NavLink>
            </Nav.Item>
          </Nav>
          </Row>
          
          </Container>

          <div>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/orders" component={OrderTable} />
            <Route path="/upload-product" component={UploadProductForm} />
            <Route path="/product/:sku" component={UpdateProduct} />
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
