import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import OrderForm from './OrderForm'


const mapStatetotoProps = state => {
    const {cart} = state.cartReducer
    return {cart}
}



class Checkout extends Component{

    constructor(){
        super()

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
           return
       }
       alert('Cart is empty\nPlease add items')
    }

    render(){
        return(
            <Container>
                <Row >   
                   <Col> <CheckoutSummary cart={this.props.cart}/></Col> 
                   <Col> <OrderForm order={this.order}/> </Col> 
                </Row>
            </Container>
            
        )
    }
}

export default connect(mapStatetotoProps)(Checkout)