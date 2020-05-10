import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import {connect} from 'react-redux'


class GridProduct extends Component {

    buyItem(){

    }

    render() {
        return (

            <Card style={{ width: '10rem', margin: '15px' }}>
                <Card.Img variant="top" src="https://picsum.photos/500/500" />
                <Card.Body>
                    <Card.Title>{this.props.data.name}</Card.Title>
                    <Card.Text>
                        <div>
                        Ár: { this.props.data.price } <br/>
                        Mennyiség: { this.props.data.stock }
                        </div>
                    </Card.Text>
                    <Button variant="primary" onClick={()=> this.props.dispatch({type: 'ADD_TO_CART', payload: {price: this.props.data.price, name: this.props.data.name, quantity: 2}})}>Buy Item</Button>
                </Card.Body>
            </Card>
              
        
        )
    }
}

export default connect(null, null)(GridProduct)