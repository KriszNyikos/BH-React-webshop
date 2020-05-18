import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Button, Row } from 'react-bootstrap'

const mapStatetotoProps = (state, props) => {
    const { products, cart, pictures } = state.cartReducer
    const { sku } = props.product

    const picture = pictures.find(p => p.sku === sku && p.isPrimary === 1) || pictures.find(p => p.sku === sku)
    const cartProduct = cart.filter(e => e.sku === sku)[0]
    const quantity = cartProduct.quantity

    return { cartProduct, quantity, picture }
}

class SummaryProduct extends Component {

    buyItem(payload) {
        return this.props.dispatch({ type: 'ADD_TO_CART', payload })
    }

    removeItem(payload) {
        return this.props.dispatch({ type: 'REMOVE_FROM_CART', payload })
    }

    render() {
        const { sku, quantity, stock, picture } = this.props
        const imgPath = `http://localhost:3050${picture.imagePath}`
        const imgStyle = { height: "100px", width: "100px", borderRadius: '10px' }


        return (
            <Row className="align-items-center justify-content-between" style={{ margin: '15px' }} fluid>
                <Col  sm={2}><img style={imgStyle} src={imgPath} /></Col>

                <Col sm={4}><b>{this.props.cartProduct.name}</b> ({this.props.cartProduct.sku} )</Col>

                <Col sm={1}>{quantity}</Col>

                <Col className="text-right" sm={3}>= {this.props.cartProduct.price * quantity} HUF</Col>
            </Row >
        )
    }
}

export default connect(mapStatetotoProps)(SummaryProduct)