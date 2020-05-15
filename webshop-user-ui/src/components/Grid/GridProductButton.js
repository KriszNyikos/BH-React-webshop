import React, { Component } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    const { products, cart } = state
    const { sku } = props
    const cartInfo = cart.filter(e => e.sku === sku)[0]
    const quantity = products.filter(e => e.sku === sku)[0].stock
    return { cartInfo, quantity }
}


class GridProductButton extends Component {

    buyItem(payload) {
        return this.props.dispatch({ type: 'ADD_TO_CART', payload })
    }

    removeItem(payload) {
        return this.props.dispatch({ type: 'REMOVE_FROM_CART', payload })
    }

    render() {
        const { sku, quantity } = this.props
        const removeButton = <Button variant="outline-secondary" onClick={() => this.removeItem({ sku })}>Remove Item</Button>

        const addButton = (text) => {
            return <Button variant="outline-primary" onClick={() => this.buyItem({ sku })}><div>{text}</div></Button>
        }

        const addText = (this.props.quantity != 0  && this.props.cartInfo) ? 'Add another one' : 'Add new one'

        return (
            <Container>
                
                {(this.props.quantity === 0 ) && <Row className='justify-content-between'> {removeButton} Out of stock </Row>}
                {(this.props.quantity > 0 ) && <Row className='justify-content-between'> {removeButton} {quantity} {addButton(addText)}</Row>}
               
            </Container>


        )
    }
}

export default connect(mapStateToProps)(GridProductButton)