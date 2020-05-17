import React, {Component} from 'react'
import {Container, Row, Button} from 'react-bootstrap'


export default class CartSummary extends Component{
    render(){
        return(
            <Container>
                    {
                    this.props.cart.length > 0 ?
                    
                   this.props.cart.map((product, index) => {
                        return (
                            <ul>
                            <Row key={index} className='justify-content-between'>
                              <div> {product.name}</div>
                              <div>{product.price}</div> 
                              <div>{product.quantity}</div> 
                            </Row>
                           </ul>
                        )
                    })
                    :
                    "The cart is empty"
                    }
                    <Row>Total: {this.props.cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0)}</Row>
            </Container>

        )
    }
}