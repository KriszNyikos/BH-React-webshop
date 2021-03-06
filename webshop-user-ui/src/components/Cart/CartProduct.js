import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Button, Row } from 'react-bootstrap'
import plus from './plus.png'
import minus from './minus.png'

const mapStatetotoProps = (state, props) => {
    const { products, cart, pictures } = state.cartReducer
    const { sku } = props

    const picture = pictures.find(p => p.sku === sku && p.isPrimary === 1) || pictures.find(p => p.sku === sku)
    const stock = products.filter(e => e.sku === sku)[0].stock
    const cartProduct = cart.filter(e => e.sku === sku)[0]
    const quantity = cartProduct.quantity

    return { cartProduct, quantity, stock, picture }
}

class CartProduct extends Component {

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
        const buttonstyle ={width: "30px"}


        return (
            <Row className="align-items-center justify-content-between" style={{ margin: '15px' }} fluid>
                <Col  sm={2}><img style={imgStyle} src={imgPath} /></Col>

                <Col sm={2}><b>{this.props.cartProduct.name}</b> ({this.props.cartProduct.sku} )</Col>

                <Col sm={2}>{sku}</Col>

                <Col sm={2} >
                <Row className="justify-content-between"  >
                {quantity ? <img src={minus} style={buttonstyle}  onClick={() => this.removeItem({ sku })}/> : ""}
                {this.props.cartProduct.quantity}
                {stock !== 0 ? <img src={plus} style={buttonstyle} onClick={() => this.buyItem({ sku })}/> : ""}
                </Row>
                </Col>

                <Col className="text-right" sm={2}>= {this.props.cartProduct.price * quantity} HUF</Col>
            </Row >
        )
    }
}

export default connect(mapStatetotoProps)(CartProduct)