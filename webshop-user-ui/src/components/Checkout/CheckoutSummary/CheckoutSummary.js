import React, {Component} from 'react'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import SummaryProduct from './SummaryProduct'


export default class CheckoutSummary extends Component{
    render(){
        if(!this.props.cart.length) return(
            <Row className="justify-content-center">
                Cart is empty
                {alert('Cart is empty \nPlease add items to the cart before send an order')}
            </Row>
        ) 
        return(
            <Container>
                <Row className="align-items-center justify-content-between" style={{ margin: '15px' }} fluid>
                <Col  sm={2}>Picture</Col>

                <Col sm={3}><b>Name</b> / sku </Col>

                <Col sm={2}>Quant.</Col>

                <Col className="text-right" sm={3}> Price HUF</Col>
            </Row >
                    {
                    this.props.cart.length > 0 ?
                    
                   this.props.cart.map((product, index) => {
                        return (
                            <SummaryProduct product={product}/>
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
            </Container>

        )
    }
}