import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {Container, Row, Button} from 'react-bootstrap'
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
                            <Row>
                            <CartProduct key={index} sku={product.sku}/>
                           </Row>
                        )
                    })
                    :
                    "The cart is empty"
                    }


                    Total  {this.props.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}

                    <Row className='justify-content-between'>
                <Button variant="outline-primary" onClick={() => this.props.dispatch({type: 'EMPTY_CART'})}><div>Empty Cart</div></Button>
                <Link to="/checkout"> <Button variant="primary"> Checkout</Button></Link>
                </Row>
            </Container>

        )
    }
}

export default connect(mapStatetotoProps)(Cart)