import React, {Component} from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import { connect } from 'react-redux'


const mapStateToProps = (state, props) => {
    const { sku } = props
    const product = state.cartReducer.products.filter(e => e.sku === sku)[0]
    return { product, sku }
}


class ProductInfo extends Component{
    render(){
        return(
            <Container>
                <h2>{this.props.product.name}</h2>
                <Row>
        <           p>Stock: {this.props.product.stock ? this.props.product.stock : 'Out of stock'}</p><br/>
                    <p>product description</p>
                </Row>

                <Row className='justify-content-end'>
                    <Button onClick={()=> this.props.dispatch({ type: 'ADD_TO_CART', payload: {sku: this.props.sku }})} >Add to cart</Button>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(ProductInfo)