import React, { Component } from 'react'
import { Card, Button, Form, Container, Row } from 'react-bootstrap'
import {connect} from 'react-redux'


class GridProduct extends Component {
    constructor(props){
        super(props)

        this.qref = React.createRef()
    }

    

    render() {
        return (

            <Card style={{ width: '18rem', margin: '15px' }}>
                <Card.Img variant="top" src="https://picsum.photos/500/500" />
                <Card.Body>
                    <Card.Text>
                    <Container>
                <Row className='justify-content-between'>
                    <div>Product name: {this.props.data.name}</div>
                    <div> Price: { this.props.data.price }</div>
                    </Row>
                
            </Container>
                        <div>
                        Ár: <br/>
                        Mennyiség: { this.props.data.stock }
                        </div>
                    </Card.Text>
                    <Button variant="primary" onClick={()=> this.props.dispatch({type: 'ADD_TO_CART', payload: {sku: this.props.data.sku ,price: this.props.data.price, name: this.props.data.name, quantity: 1}})}>Buy Item</Button>
                </Card.Body>
            </Card>
              
        
        )
    }
}

export default connect(null, null)(GridProduct)