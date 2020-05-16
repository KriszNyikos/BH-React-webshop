import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import CartSummary from './CartSummary'
import OrderForm from './OrderForm'


const mapStatetotoProps = state => {
    const {cart} = state.cartReducer
    return {cart}
}



class Checkout extends Component{

    order(){
        alert('Order', this.props.cart)
    }

    render(){
        return(
            <Container>
                <Row >   
                   <Col> <CartSummary cart={this.props.cart}/></Col> 
                   <Col> <OrderForm order={()=>this.order()}/> </Col> 
                </Row>
            </Container>
            
        )
    }
}

export default connect(mapStatetotoProps)(Checkout)