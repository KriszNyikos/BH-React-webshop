import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Container, Button, Row} from 'react-bootstrap'

const mapStatetotoProps = (state, props) => {
    const { products, cart } = state.cartReducer
    const { sku } = props

    const stock = products.filter(e => e.sku === sku)[0]
    const cartProduct = cart.filter(e => e.sku === sku)[0]
    const quantity = products.filter(e => e.sku === sku)[0].stock

    return { cartProduct, quantity, stock }
}

class CartProduct extends Component{

    buyItem(payload) {
        return this.props.dispatch({ type: 'ADD_TO_CART', payload })
    }

    removeItem(payload) {
        return this.props.dispatch({ type: 'REMOVE_FROM_CART', payload })
    }

    render(){
        const { sku, quantity, stock } = this.props
        return(
            <Container>
                <Row className='justify-content-between'>
                <img style={{height: "100px"}} src="https://picsum.photos/500/500"/>
                {this.props.cartProduct.price}
                {sku}
                {stock !== 0 ? <Button variant="outline-primary" onClick={() => this.removeItem({ sku })}><div>-</div></Button>: ""}
                {this.props.cartProduct.quantity}
                {quantity ? <Button variant="outline-primary" onClick={() => this.buyItem({ sku })}><div>+</div></Button>: ""}
                Price: {this.props.cartProduct.price * quantity}
                </Row>
            </Container>
        )
    }
}

export default connect(mapStatetotoProps)(CartProduct)