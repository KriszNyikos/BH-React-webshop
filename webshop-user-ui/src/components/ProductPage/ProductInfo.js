import React, { Component } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'



class ProductInfo extends Component {
    render() {
        return (

            <Container>
                <h2>{this.props.product.name}</h2>
                <Row>
                    <p>Stock info: {this.props.product.stock ? this.props.product.stock : 'Out of stock'}</p>

                </Row>
                <Row>
                        <Form.Label>Product description:</Form.Label>
                        <Form.Control as="textarea" disabled rows="3" value={this.props.product.description}/>
                </Row>
                <Row className='justify-content-end mt-5'>
                    <Button onClick={() => this.props.dispatch({ type: 'ADD_TO_CART', payload: { sku: this.props.product.sku } })} >Add to cart</Button>
                </Row>
            </Container>
        )
    }
}

 export default connect(null, null)(ProductInfo)