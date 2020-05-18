import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import OrderForm from './OrderForm'
import {Redirect} from 'react-router-dom'


const mapStatetotoProps = state => {
    const {cart} = state.cartReducer
    return {cart}
}



class Checkout extends Component{

    constructor(){
        super()
        this.state ={redirect: false}
        this.order = this.order.bind(this)
    }

    order(formData){
       console.log('Cart',this.props.cart, 'Customer',formData)

       const orderDatas = {cart: this.props.cart, customer: formData}
       if(this.props.cart.length){
           fetch('http://localhost:3050/new-order',
                {
                    method: 'POST',
                    headers: 
                    {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderDatas)
                }
           )
           alert('Item is on way')
           this.setState({redirect: true})
           return
       }
       alert('Cart is empty\nPlease add items')
    }

    render(){
        
        return(
            <Container>
                {this.state.redirect ? <Redirect to="/products" /> : ""}
                <Row >   
                   <Col> <CheckoutSummary cart={this.props.cart}/></Col> 
                   <Col> <OrderForm order={this.order}/> </Col> 
                </Row>
            </Container>
            
        )
    }
}

export default connect(mapStatetotoProps)(Checkout)