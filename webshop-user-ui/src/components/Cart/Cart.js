import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {Container, Row, Button, Alert} from 'react-bootstrap'
import CartProduct from './CartProduct'

const mapStatetotoProps = state => {
    const {cart} = state.cartReducer
    return {cart}
}

class Cart extends Component{
    render(){
        return(

            <Container>

                    {
                    this.props.cart.length > 0 ?
                    
                   this.props.cart.map((product, index) => {
                        return (
                            <Container style={{borderBottom: "1px solid black"}} fluid>
                            <CartProduct key={index} sku={product.sku}/>
                           </Container>
                        )
                    })
                    :
                    "The cart is empty"
                    }

                <Row className='justify-content-end mt-2'>
                    <Alert variant='primary'>
                    <b>Total: </b>  {this.props.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)} HUF
                    </Alert>
                </Row>
                    

                    <Row className='justify-content-between'>
                <Button variant="outline-primary" onClick={() => this.props.dispatch({type: 'EMPTY_CART'})}><div>Empty Cart</div></Button>
                <Link to="/checkout"> <Button variant="primary"> Checkout</Button></Link>
                </Row>
            </Container>

        )
    }
}

export default connect(mapStatetotoProps)(Cart)