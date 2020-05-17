import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Container, Button, Row} from 'react-bootstrap'

const mapStatetotoProps = (state, props) => {
    const { products, cart, pictures } = state.cartReducer
    const { sku } = props

    const picture = pictures.find(p => p.sku === sku && p.isPrimary === 1) || pictures.find(p => p.sku === sku)
    const stock = products.filter(e => e.sku === sku)[0]
    const cartProduct = cart.filter(e => e.sku === sku)[0]
    const quantity = products.filter(e => e.sku === sku)[0].stock

    return { cartProduct, quantity, stock, picture }
}

class CartProduct extends Component{

    buyItem(payload) {
        return this.props.dispatch({ type: 'ADD_TO_CART', payload })
    }

    removeItem(payload) {
        return this.props.dispatch({ type: 'REMOVE_FROM_CART', payload })
    }

    render(){
        const { sku, quantity, stock, picture } = this.props
        const imgPath = `http://localhost:3050${picture.imagePath}`
        return(
            <Container>
                <Row className='justify-content-between'>
                <img style={{height: "100px"}} src={imgPath}/>
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